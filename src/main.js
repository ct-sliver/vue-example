// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
// import resource from 'vue-resource'
import $config from './assets/global.js'
import 'jquery'
import './assets/lib/js/flexible.js'

// Vue.use(resource)
Vue.use($config)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App },
  mounted () {
    this.$config.init();
  }
})
