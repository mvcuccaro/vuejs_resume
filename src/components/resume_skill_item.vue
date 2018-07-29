<template>
	<div class="col-sm-12" v-on:click="showBody(skill_item.name)">
		<div class="card text-white bg-primary">
			<div class="card-header bg-primary">
				<div class="row">
					<div class="col-sm-7 col-xs-10 col-lg-5 col-md-6"><i class="fa fa-angle-double-down mr-2"></i>{{ skill_item.name }}</div>
					<div class="col-sm-5 col-xs-2 col-lg-7 col-md-6">Years: {{ skill_item.years }}</div>
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
			show_body: this.$session.getData('skill_shows')[this.skillitem.name] || false
		}
	},
	methods: {
		showBody(arg_skill_name){
			let skill_shows = this.$session.getData('skill_shows');
			skill_shows[arg_skill_name] = !skill_shows[arg_skill_name];
			this.$session.setData('skill_shows', skill_shows);
			this.show_body = skill_shows[arg_skill_name];
		}
	}
}
</script>
