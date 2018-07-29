<template>
	<div class="card mb-2">
		<div class="card-header">
			<div class="row">
				<div class="col-sm-6">
					{{ changelogItem.commit.author.date }}
				</div>
				<div class="col-sm-6">
					{{ changelogItem.sha }}
				</div>
			</div>
		</div>
		<div class="card-body">
			<div class="col-sm-12">
				{{ changelogItem.commit.message }}
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		props: ['changelogItem'],
		data(){
			return {

			}
		}
	}
</script>

<style scoped>
</style>