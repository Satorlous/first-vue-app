import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/:type?',
      component: () => import('./views/Home'),
    },

    {
      path: '/cars/:id',
      component: () => import('./views/CarView'),
    }
  ]
})