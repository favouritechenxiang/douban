import Vue from 'vue'
import Router from 'vue-router'
import dianying from '../pages/dianying'
import tushu from '../pages/tushu'
import guangbo from '../pages/guangbo'
import xiaozu from '../pages/xiaozu'
import sousuo from '../pages/sousuo'
import index from '../pages/index'
import oumei from '../pages/oumei'
import reg from '../pages/reg'
import login from '../pages/login'
import xiangqing from '../pages/xiangqing'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/index',
      name: 'index',
      component: index
    },
    {
      path: '/dianying',
      name: 'dianying',
      component: dianying
    },
    {
      path: '/tushu',
      name: 'tushu',
      component: tushu
    },
    {
      path: '/guangbo',
      name: 'guangbo',
      component: guangbo
    },
    {
      path: '/xiaozu',
      name: 'xiaozu',
      component: xiaozu
    },
    {
      path: '/sousuo',
      name: 'sousuo',
      component: sousuo
    },
    {
      path: '/oumei',
      name: 'oumei',
      component: oumei
    },
    {
      path: '/reg',
      name: 'reg',
      component: reg
    },
    {
      path: '/login',
      name: 'login',
      component: login
    },
    {
      path: '/xiangqing',
      name: 'xiangqing',
      component: xiangqing
    },
    {
      path:'/*',
      redirect:'/index'
    }
  ]
})
