<template>
  <div id="app" class="container-fluid col-sm-12 col-md-11 col-lg-10 col-xl-8 mb-5 pb-5">
    <my-header></my-header>
    <router-view></router-view>
  </div>

</template>

<script>
import Mylistitem from './mylisteitem.vue';
import Header from './components/header.vue';

export default {
  name: 'app',
  mounted(){
  },
  components: {
    'my-list-item':Mylistitem,
    'my-header':Header
  },
  data () {
    return {
      msg: 'Welcome',
      //mylist: ['foo', 'bar', 'oom', 'bop']
      mylist: []
    }
  },
  methods: {
  }
}
</script>

<style>
.card-header{
  padding-top:2px;padding-bottom:2px;padding-left:10px;
}
.card-body{
  padding-top:12px;padding-bottom:12px;
}

.expand-enter-active {
  transition: all .4s ease-out, opacity .8s ease-out;
  font-size:16px;
  height:auto;
  max-height: 400px;
  overflow:hidden;
  opacity:100;
}
.expand-enter, .expand-leave-to {
  max-height:0px;
  height:0px;
  opacity:0;
  color:red;
  font-size:32px;
}
</style>
