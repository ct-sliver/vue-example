import Vue from 'vue'
import Router from 'vue-router'
import home from 'components/home/home.vue'
import foo from 'components/foo/foo.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: home
    },
    {
      path:'/foo',
      name:'foo',
      component: foo
    }
  ]
})
