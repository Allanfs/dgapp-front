import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";

import AddRecheio from "./components/recheio/AddRecheio.vue";
import ListarRecheio from "./components/recheio/ListarRecheio.vue";

import AddTamanho from "./components/tamanho/AddTamanho.vue";
import ListarTamanho from "./components/tamanho/ListarTamanho.vue";

import AddProduto from "./components/produto/AddProduto.vue";
import AddCliente from "./components/cliente/AddCliente.vue";
import AddSabor from "./components/sabor/AddSabor.vue";

import AddCategoria from "./components/categoria/AddCategoria.vue";


import Cadastro from "@/components/cadastro.vue"
Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/adicionar/",
      name: "adicionar",
      component: Cadastro,
      children: [
        {
          name: "Cadastro Categoria",
          path: "categoria",
          component:AddCategoria
        },
        {
          name: "Cadastrar Recheio",
          path: "recheio",
          component: AddRecheio
        },
        {
          name: "Cadastrar Tamanho",
          path: "tamanho",
          component: AddTamanho
        },
        {
          name: "Cadastrar Produto",
          path: "produto",
          component: AddProduto
        },
        {
          name: "Cadastrar Cliente",
          path: "cliente",
          component: AddCliente
        },
        {
          name: "Cadastrar Sabor",
          path: "sabor",
          component: AddSabor
        }
      ]
    },
    {
      path: "/listar/",
      name: "listar",
      // component: ,
      children: [
        {
          name: "Listar Recheio",
          path: "recheio",
          component: ListarRecheio
        },
        {
          name: "Listar Tamanho",
          path: "tamanho",
          component: ListarTamanho
        }
      ]
    },
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "about" */ "./views/About.vue")
    }
  ]
});
