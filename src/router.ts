import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import BaseType from './views/BaseType.vue'
import ClassType from './views/Class.vue'
import Interface from './views/Interface.vue'
import Func from './views/Func.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    }, {
      path: '/baseType',
      name: 'baseType',
      component: BaseType
    }, {
      path: '/class',
      name: 'class',
      component: ClassType
    }, {
      path: '/interface',
      name: 'interface',
      component: Interface
    }, {
      path: '/function',
      name: 'function',
      component: Func
    }, {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    }
  ]
})
