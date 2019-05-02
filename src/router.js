import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import AddRecheio from './components/recheio/AddRecheio.vue'
import AddTamanho from './components/tamanho/AddTamanho.vue'
import AddProduto from './components/produto/AddProduto.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    },
    {
      path: '/adicionar/recheio',
      name: 'recheio',
      component: AddRecheio
    },
    {
      path: '/adicionar/tamanho',
      name: 'tamanho',
      component: AddTamanho
    },
    {
      path: '/adicionar/produto',
      name: 'produto',
      component: AddProduto
    }
  ]
})
