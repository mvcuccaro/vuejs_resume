<template>
	<div class="card-body text-right">
		<h4 class="myheader">{{ title }}</h4>
	</div>
</template>

<script>
export default {
  data () {
    return {
    	title: this.$config.title
    }
  },
  methods: {

  }
} 
</script>

<style scoped> 
.card-body { padding-top:4px;padding-bottom:0px;padding-right:6px;border-bottom:1px solid #DDDDDD; margin-bottom:8px; }
.myheader { margin-left:10px; font-family: 'Libre Barcode 128 Text';font-size:60px; }
@import url('https://fonts.googleapis.com/css?family=Libre+Barcode+128+Text');
</style>