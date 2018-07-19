<template>
	<div class="col-sm-12" v-on:click="show_body = !show_body">
		<div class="card text-white bg-primary">
			<div class="card-header bg-primary">
				<div class="row">
					<div class="col-sm-3"><i class="fa fa-angle-double-down mr-2"></i>{{ skill_item.name }}</div>
					<div class="col-sm-3">Years: {{ skill_item.years }}</div>
				</div>
			</div>
			<transition name="expand">
				<div class="card-body bg-white text-primary" v-show="show_body">
					{{ skill_item.description }}
				</div>
			</transition>
		</div>
	</div>
</template>

<script>
export default{
	props: ['skillitem'],
	data (){ 
		return {
			skill_item: this.skillitem,
			show_body:false
		}
	}
}
</script>
