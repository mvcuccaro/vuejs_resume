<template>
  <div id="app" class="container-fluid col-sm-10">
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
    this.getList(),
    this.whatever()
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
    getList(){
      this.$axios.get('https://localhost:443/data')
      .then(r => {
        this.mylist = r.data.data;
      })
    },
    whatever(){
    }

  }
}
</script>

<style>
.card-header{
  padding-top:2px;padding-bottom:2px;padding-left:10px;
}
</style>
