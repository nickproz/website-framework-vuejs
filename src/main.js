// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App.vue'
import router from './router/index'
import axios from 'axios'
import vuex from 'vuex'
import store from './store'

// Require our third party vendor files
require('./vendor.js')

Vue.use(vuex)
Vue.config.productionTip = false

// Use axios for all http requests
Vue.prototype.$http = axios;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
