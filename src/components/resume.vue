<template>
	<div>
		<resume-header v-bind:objective="resume.objective"></resume-header>
		<div class="row">
			<div class="col-sm-9">
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
			<div class="col-sm-3 ml-0 pl-0" id="repos_container">
				<div class="card">
					<div class="card-header">My Github Repos</div>
					<div class="card_body" id="repos_list_body">
						<div class="row ml-1 mb-1" v-for="item in my_repos" v-show="item.fork == false">
							<div class="col-1">
								<router-link :to="{ name: 'changelog', params: { repo_name: item.name }}" :title="changelogTitle(item.name)">
									<i class="fa fa-list"></i>
								</router-link>
							</div>
							<div class="col-10">
								<div>
									<a :href="item.svn_url" :title="item.description">{{ item.name }}</a>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div class="card">
					<div class="card-header">Audio</div>
					<div class="card-body m-1 p-1">
						<audio-player :audio-sources="audio_sources"></audio-player>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
import ResumeSkillItem from './resume_skill_item.vue';
import ResumeExperienceItem from './resume_experience_item.vue';
import ResumeHeader from './resume_header.vue';
import AudioPlayer from './audio_player.vue';

export default {
	components:{
		'resume-skill-item': ResumeSkillItem,
		'resume-experience-item': ResumeExperienceItem,
		'resume-header': ResumeHeader,
		'audio-player': AudioPlayer
	},
  	data () {
    	return {
    		resume: {},
    		my_repos: [],
    		sort_directions:{skills: true, experience:true},
    		skill_shows: this.$session.getData('skill_shows') || {},
    		audio_sources: [{
    			src:'http://thirdpartyinterface.com/mp3/3pi.call_of_shinebox.2014-4-25.mp3',
    			name:'Call of Shinebox'
    		},{
    			src:'http://thirdpartyinterface.com/mp3/3pi.the_periss_correlation.2014-4-25.2.mp3',
    			name: 'The Periss Correlation'
    		}]
    	}
  	},
  methods: {
	getResume(){
		this.$axios.get(this.$config.api_url + '/data/resume')
		.then(r => {
			this.resume = r.data;
			if( Object.keys(this.skill_shows).length == 0 ){
				this.resume.skills.forEach( obj => {
					this.skill_shows[obj.name] = false;
				})
				this.$session.setData('skill_shows', this.skill_shows);
			}
		})
	},
	getRepos(){
		this.$axios.get(this.$config.github_repos_url)
		.then(r => {
			this.my_repos = r.data;
		});
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
	},
	changelogTitle: function(arg_name) {
  		return `Change log for ${arg_name} project`;
  	},
  	audioPlay: function(){
  		this.$refs.audio_controls.play();
  	}

  },
  mounted(){
  	this.getResume(),
  	this.getRepos()
  }
} 
</script>

<style scoped>
#header {
	background-color:#C0C0FF;
}
#repos_list_body {
	font-size:15px;
}

#repos_list_body i {
	font-size:13px;
	color:black;
}
</style>