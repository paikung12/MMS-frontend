import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import  axios from 'axios'
import  '@/assets/css/base.css'
import vuetify from './plugins/vuetify';


Vue.config.productionTip = false
window.axios = axios.create({
  baseURL: 'http://127.0.0.1:8000/api/',
  timeout: 1000,
})

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')

// yarn serve =>​ run project