<template>
  <li id="mylistitem">{{ item }}</li>
</template>

<script>
export default {
  props: ['myitem'],
  data () {
    return {
      item: this.myitem
    }
  },
  methods: {

  }
} 
</script>

<style>

</style>
