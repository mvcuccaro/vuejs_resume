<template> 
	<div class="card" id="resume_header">
		<div class="card-body">
			<div class="row">
				<div class="col-xs-5 col-sm-4 col-md-4 col-lg-3">
					<img id="profile_image" class="col-12" v-bind:src="profile_image">
				</div>
				<div class="col-xs-7 col-sm-8 col-md-8 col-lg-9">
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

	#profile_image {
		padding:0px;
		border:2px solid #000000;
		border-radius:7px;
	}
</style>

