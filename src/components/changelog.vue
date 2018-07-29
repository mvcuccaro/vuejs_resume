<template>
	<div class="card">
		<div class="card-header bg-primary m-2 p-2">Changelog for {{ repo_name }}</div>
		<div class="card-body">
			<changelog-item v-for="item in this.commits" v-bind:changelogItem="item" v-bind:key="item.commit.sha"></changelog-item>
		</div>
	</div>
</template>

<script>
import changelogItem from './changelog_item.vue';

export default {
	components: {
		changelogItem: changelogItem
	},
	data() {
		return {
			title: 'changelog',
			commits: [],
			repo_name: ''
		}
	},
	methods:{
		getCommits(){
			this.repo_name = this.$route.params.repo_name || 'vuejs_resume';
			let changelog_url = `https://api.github.com/repos/mvcuccaro/${this.repo_name}/commits`;

			this.$axios.get(changelog_url)
			.then(result => {
				this.commits = result.data;
			})
		}
	},
	mounted(){
		this.getCommits();
		console.log(this.$route.params);
	}
}
</script>
<style>
</style>