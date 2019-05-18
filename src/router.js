import Vue from "vue";
import Router from "vue-router";
import ConsultarCliente from "./components/cliente/ConsultarCliente.vue";

import cadastros from "@/routes/cadastros.js"
import edicoes from "@/routes/edicoes.js"
import listagens from "@/routes/listagens.js"

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    cadastros,
    listagens,
    edicoes,
    {
      path: "/consultar/cliente",
      name: "search",
      component: ConsultarCliente
    }
  ]
});
