import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/helloWord',
      name: 'helloWord',
      component: () => import('@/views/HelloWorld')
    },
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/nav',
      name: 'nav',
      component: () => import('@/views/nav'),
      children: [
        {
          path: 'nav1-demo1',
          name: 'nav1-demo1',
          component: () => import('@/views/nav1/demo1')
        },
        {
          path: 'nav1-demo2',
          name: 'nav1-demo2',
          component: () => import('@/views/nav1/demo2')
        },
        {
          path: 'nav1-demo3',
          name: 'nav1-demo3',
          component: () => import('@/views/nav1/demo3')
        },
        {
          path: '/nav2',
          name: 'nav2',
          component: () => import('@/views/nav2')
        },
        {
          path: '/mt-meeting',
          name: 'mt-meeting',
          component: () => import('@/views/meeting/meeting')
        },
        {
          path: '/mt-meetingroom',
          name: 'mt-meetingroom',
          component: () => import('@/views/meeting/meetingroom')
        },
        {
          path: '/mt-meetingroom/edit',
          name: 'mt-meetingroom/edit',
          component: () => import('@/views/meeting/meetingroomEdit')
        }
      ]
    }
  ]
})
