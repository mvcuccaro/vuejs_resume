import Vue from 'vue'
import App from './App.vue'

import axios from 'axios'
//import VueAxios from 'vue-axios'
import VueRouter from 'vue-router'
import Routes from './routes';
import https from 'https';
import Session from './session';
import BootstrapVue from 'bootstrap-vue'

import config from './config/config'

Vue.use(BootstrapVue);

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.prototype.$config = config;
Vue.prototype.$session = new Session();

Vue.use(VueRouter);


Vue.prototype.$axios = axios.create({
  httpsAgent: new https.Agent({  
    rejectUnauthorized: false
	})
})

const router = new VueRouter({
	routes: Routes
});

new Vue({
  el: '#app',
  render: h => h(App),
  router: router,
  methods:{
    _myInit(){
      //do some init
    },
  	getInfo(){
  		//console log stuff here
  	}
  },
  mounted(){
    this._myInit();
  	this.getInfo();
  }
})
