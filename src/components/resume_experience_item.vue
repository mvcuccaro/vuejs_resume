<template>
	<div class="col-sm-12" v-on:click="show_body = !show_body">
		<div class="card text-white">
			<div class="card-header bg-primary">
				<div class="row">
					<div class="col-sm-4"><i class="fa fa-angle-double-down mr-2"></i>{{ experience_item.title }}</div>
					<div class="col-sm-4">{{ experience_item.company }}</div>
				</div>
			</div>
			<transition name="expand">
			<div class="card-body bg-white text-primary" v-if="show_body">
				{{ experience_item.description }}
			</div>
			</transition>
		</div>
	</div>
</div>
</template>

<script>
export default{
	props: ['experienceitem'],
	data (){ 
		return {
			experience_item: this.experienceitem,
			show_body:false
		}
	}
}
</script>

<style scoped>
	.card-header {  background-color:yellow !important; color:#666666; font-weight: bold !important}
	.expand-enter-active {
		transition: all .6s ease-out;
		height:auto;
		max-height: 400px;
		overflow:hidden;
	}
	.expand-enter, .expand-leave-to {
		max-height:0px;
		height:0px;
		opacity:0;
	}
</style>