// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import {store} from './store/store'

Vue.config.productionTip = false
Vue.component('NavBar', require('./components/apps/NavBar.vue').default)
Vue.component('BoatSelector', require('./components/apps/BoatSelector.vue').default)

/* eslint-disable no-new */
var app = new Vue({
  store: store,
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
