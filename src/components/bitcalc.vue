<template>
	<div>
		<div>
				<div><input type="checkbox" :id="'bc_cb_' + _uid + '1'" value="1" v-model="bits"></div>
				<div><input type="checkbox" :id="'bc_cb_' + _uid + '2'" value="2" v-model="bits"></div>
				<div><input type="checkbox" :id="'bc_cb_' + _uid + '4'" value="4" v-model="bits"></div>
		</div>
	</div>
</template>

<script>
export default{
	props:['p_total'],
	data(){
		return {
			bits:[],
			total:0
		}
	},
	computed:{
	},
	watch: {
		bits: function(val){
			this.total = this.bits.reduce( (a,b) => {
				return parseInt(a) + parseInt(b);
			}, 0)
			this.$emit('totalChanged', this.total);
		}
	},
	mounted(){
		this.total = this.p_total;
	}
}
</script>