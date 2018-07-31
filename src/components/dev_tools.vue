<template>
	<div class="card">
		<div class="card-header bg-primary">{{ name }}</div>
			<div class="card-body bg-secondary">
				<md5er></md5er>
				<bitcalc @totalChanged="bitcalcTotalChanged($event)" :total="bitcalc_total"></bitcalc>
				<div>bitcalc total: {{ bitcalc_total }}</div>
			</div>
		</div>
</template>

<script>
import md5er from './md5er.vue';
import bitcalc from './bitcalc.vue';

export default {
	components: {
		md5er: md5er,
		bitcalc: bitcalc
	},
	data(){
		return {
			name: 'dev tools',
			bitcalc_total: 0
		}
	},
	methods:{
		bitcalcTotalChanged(val){
			this.bitcalc_total = val;
		}
	}
}
</script>