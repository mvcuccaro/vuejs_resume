<template> 
	<div class="card" id="resume_header">
		<div class="card-body">
			<div class="row">
				<div class="col-xs-5 col-sm-4 col-md-4 col-lg-3">
					<img id="profile_image" class="col-12" v-bind:src="profile_image">
				</div>
				<div class="col-xs-7 col-sm-8 col-md-8 col-lg-9 text-justify">
					<span style="white-space:pre-wrap" id="objective"><p>{{ objective }}</p></span>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	props: ['objective'],
	data() {
		return {
			profile_image: this.$config.profile_image,
			objective: this.objective
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

	#objective {
		font-size:14px;
		line-height:17px !important;
	}
</style>

