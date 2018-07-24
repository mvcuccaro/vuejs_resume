<template>
	<div class="card-body text-right">
		<h4 class="myheader" ref="header"><span v-on:mouseover="scanOver">.</span>{{ title }}<span v-on:mouseover="scanOut">.</span></h4>
	</div>
</template>

<script>
export default {
  data () {
    return {
    	title: this.$config.title,
      scan_time: false
    }
  },
  methods: {
      scanOver(){
        this.scan_time = true;
        setTimeout(() => {
            this.scan_time = false;
        }, 2000);
      },
      scanOut(){
        if( this.scan_time ){
          this.processScan();
        }
      },
      processScan(){
        this.scan_time = false;
        this.$refs.header.style = "color:red";
        document.querySelector('body').style.backgroundColor = "black"
        setTimeout(() => {
          this.$refs.header.style = "color:black";
          document.querySelector('body').style.backgroundColor = "white"
        }, 100)
      }
  }
} 
</script>

<style scoped> 
.card-body { padding-top:4px;padding-bottom:0px;padding-right:6px;border-bottom:1px solid #DDDDDD; margin-bottom:8px; }
.myheader { margin-left:10px; font-family: 'Libre Barcode 128 Text';font-size:60px; }
@import url('https://fonts.googleapis.com/css?family=Libre+Barcode+128+Text');
</style>