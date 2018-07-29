<template>
	<div class="card">
		<div class="card-header">{{ name }}</div>
		<div class="card-body">
			<div class="row mb-1">
				<div class="col-12"><input type="text" v-model="raw" class="contained"></input></div>
			</div>
			<div class="row">
				<div class="col-12"><textarea v-html="md5Data" class="contained"></textarea></div>
			</div>
		</div>
	</div>
</template>

<script>
import md5 from 'md5';

export default {
	data(){
		return {
			name: 'md5er',
			raw: ''
		}
	},
	computed:{
		md5Data: function(){
			return md5(this.raw);
		}
	}
}
</script>
