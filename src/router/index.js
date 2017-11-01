import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Home from '@/components/Home'
import Blog from '@/components/Blog'
import MainContent from '@/components/MainContent'
import ArticleDetail from '@/components/ArticleDetail'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Home
    },
    {
      path: '/hello',
      component: HelloWorld
    },
    {
      path: '/blog',
      component: Blog,
      children: [
        {
          path: '',
          component: MainContent
        },
        {
          path: ':id',
          component: ArticleDetail,
          props: true
        }
      ]
    }
  ]
})
