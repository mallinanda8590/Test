import Vue from 'vue'
import Router from 'vue-router'
import PostList from '@/components/PostList'
import View from '@/components/View'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'PostList',
      component: PostList
    },
    {
      path: 'View',
      name: 'View',
      component: View
    }
  ]
})
