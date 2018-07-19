<template> 
	<div class="card" id="resume_header">
		<div class="card-body">
			<div class="row">
				<div class="col-2">
					<img style="height:auto;width:100%" v-bind:src="profile_image">
				</div>
				<div class="col-10">
					Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
					tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
					quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
					consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
					cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
					proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	data() {
		return {
			profile_image: this.$config.profile_image		
		}
	}
}
</script>

<style scoped>
	#resume_header {
	 background-image: url("https://png.pngtree.com/thumb_back/fw800/back_pic/03/92/22/9857e259487bcd0.jpg");
	 background-size:cover;
	 border:1px outset #FDFDFD;
	 margin-bottom:4px;
	}
</style>

