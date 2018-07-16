<template>
<h4 class="myheader ml-4">{{ title }}</h4>
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
h1.myheader { margin-left:10px; }
</style>