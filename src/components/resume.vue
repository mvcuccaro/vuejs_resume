<template>
	<div>
		<resume-header></resume-header>
		<div class="card">
			<div class="text-right mb-0 pb-0" style="border-bottom: 1px dotted #C0C0C0;"><i class="fa fa-sort mr-3" v-on:click="sortData('skills', 'name')"></i></div>
			<div class="card-body text-primary bg-white">
				<div class="row bg-white"> 
					<resume-skill-item v-for="item in resume.skills" v-bind:skillitem="item" v-bind:key="item.name" class="mb-2"></resume-skill-item>
				</div>
			</div>
		</div>
		<div class="card">
			<div class="text-right mb-0 pb-0" style="border-bottom: 1px dotted #C0C0C0;"><i class="fa fa-sort mr-3" v-on:click="sortData('experiences', 'title')"></i></div>
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
    		sort_directions:{skills: true, experience:true}
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
	sortData(arg_data_type, arg_sort_column){
		this.resume[arg_data_type].sort((a,b) => {
			return this.sort_directions[arg_data_type] ? a[arg_sort_column] > b[arg_sort_column] : a[arg_sort_column] < b[arg_sort_column];
		});
		this.sort_directions[arg_data_type] = !this.sort_directions[arg_data_type];
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