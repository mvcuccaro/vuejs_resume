<template>
	<div>
		<resume-header></resume-header>
		<div class="card">
			<div class="text-right mb-0 pb-0" style="border-bottom: 1px dotted #C0C0C0;"><i class="fa fa-sort mr-3" v-on:click="sortSkills()"></i></div>
			<div class="card-body text-primary bg-white">
				<div class="row bg-white"> 
					<resume-skill-item v-for="item in resume.skills" v-bind:skillitem="item" v-bind:key="item.name" class="mb-2"></resume-skill-item>
				</div>
			</div>
		</div>
		<div class="card">
			<div class="text-right mb-0 pb-0" style="border-bottom: 1px dotted #C0C0C0;"><i class="fa fa-plus mr-3" v-on:click="addExperience()"></i></div>
			<div class="card-body text-primary bg-white">
				<div class="row bg-white"> 
					<resume-experience-item v-for="item in resume.experiences" v-bind:experienceitem="item" v-bind:key="item.company" class="mb-2"></resume-experience-item>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import ResumeSkillItem from './resume_skill_item.vue';
import ResumeExperienceItem from './resume_experience_item.vue';
import ResumeHeader from './resume_header.vue';

export default {
	components:{
		'resume-skill-item': ResumeSkillItem,
		'resume-experience-item': ResumeExperienceItem,
		'resume-header': ResumeHeader
	},
  	data () {
    	return {
    		resume: {},
    		skills_sort_up: true
    	}
  	},
  methods: {
	getResume(){
		this.$axios.get('https://localhost:443/data/resume')
		.then(r => {
			this.resume = r.data;
			console.log(this.resume.skills);
		})
	},
	sortSkills(){
		this.resume.skills.sort((a,b) => {
			return this.skills_sort_up ? a.name > b.name : a.name < b.name;
		});
		this.skills_sort_up = !this.skills_sort_up;
	},
	addExperience(){
		this.resume.experiences.push({
			title: 'title',
			company: 'company'
		});
	}	
  },
  mounted(){
  	this.getResume()
  }
} 
</script>

<style scoped>
#header {
	background-color:#C0C0FF;
}
</style>