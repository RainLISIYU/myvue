import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import VueRequest from '../components/test/VueRequest'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/test/VueRequest',
      name: 'VueRequest',
      component: VueRequest
    }
  ]
})
