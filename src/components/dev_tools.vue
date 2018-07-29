<template>
	<div class="card">
		<div class="card-header bg-primary">{{ name }}</div>
			<div class="card-body bg-secondary">
				<md5er></md5er>
			</div>
		</div>
</template>

<script>
import md5er from './md5er.vue';

export default {
	components: {
		md5er: md5er
	},
	data(){
		return {
			name: 'dev tools'
		}
	}
}
</script>