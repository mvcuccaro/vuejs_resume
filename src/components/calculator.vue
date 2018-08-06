<template>
	<div>
		<div class="card col-6 p-0">
			<div class="card-header">{{ name }}</div>
			<div v-for="index in 10" :key="index">{{ index }}</div>
			</div>
		</div>
	</div>

</template>

<script>
export default {
	data() {
		return {
			name: 'Calculator'
		}
	}
}
</script>