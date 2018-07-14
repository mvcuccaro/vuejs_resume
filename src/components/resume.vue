<template>
	<div class="panel panel-default">
		<div class="panel-body text-primary bg-white">
			<div class="row bg-white ml-3 mr-3"> 
				<resume-skill-item v-for="item in resume.skills" v-bind:skillitem="item" class="mb-2"></resume-skill-item>
			</div>
		</div>
	</div>
</template>

<script>
import ResumeSkillItem from './resume_skill_item.vue';

export default {
	components:{
		'resume-skill-item': ResumeSkillItem
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
		})
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