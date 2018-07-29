<template>
	<div>
		<changelog-item v-for="item in this.commits" v-bind:changelogItem="item" v-bind:key="item.commit.sha"></changelog-item>
	</div>
</template>

<script>
import changelogItem from './changelog_item.vue';

let changelog_url = 'https://api.github.com/repos/mvcuccaro/vuejs_resume/commits';
export default {
	components: {
		changelogItem: changelogItem
	},
	data() {
		return {
			title: 'changelog',
			commits: []
		}
	},
	methods:{
		getCommits(){
			this.$axios.get(changelog_url)
			.then(result => {
				this.commits = result.data;
				console.log(this.commits);
			})
		}
	},
	mounted(){
		this.getCommits();
	}
}
</script>
<style>
</style>