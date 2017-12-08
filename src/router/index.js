import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/nav',
      name: 'nav',
      component: () => import('@/components/nav-bar')
    },
    {
      path: '/helloWord',
      name: 'helloWord',
      component: () => import('@/views/HelloWorld')
    },
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    }
  ]
})
