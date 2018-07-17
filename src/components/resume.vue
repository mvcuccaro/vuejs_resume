<template>
	<div>
		<div class="card">
			<div class="card-body text-primary bg-white">
				<div class="row bg-white ml-3 mr-3"> 
					<resume-skill-item v-for="item in resume.skills" v-bind:skillitem="item" v-bind:key="item.name" class="mb-2"></resume-skill-item>
				</div>
			</div>
		</div>
		<div class="card">
			<div class="text-right"><i class="fa fa-plus mr-2" v-on:click="addExperience()"></i></div>
			<div class="card-body text-primary bg-white">
				<div class="row bg-white ml-3 mr-3"> 
					<resume-experience-item v-for="item in resume.experiences" v-bind:experienceitem="item" v-bind:key="item.company" class="mb-2"></resume-experience-item>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import ResumeSkillItem from './resume_skill_item.vue';
import ResumeExperienceItem from './resume_experience_item.vue';

export default {
	components:{
		'resume-skill-item': ResumeSkillItem,
		'resume-experience-item': ResumeExperienceItem
	},
  	data () {
    	return {
    		resume: {}
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

<style>
#header {
	background-color:#C0C0FF;
}
</style>