import AddPedido from "@/components/pedido/AddPedido.vue";
import AddRecheio from "@/components/recheio/AddRecheio.vue";
import AddTamanho from "@/components/tamanho/AddTamanho.vue";
import AddProduto from "@/components/produto/AddProduto.vue";
import AddCliente from "@/components/cliente/AddCliente.vue";
import AddSabor from "@/components/sabor/AddSabor.vue";
import AddCategoria from "@/components/categoria/AddCategoria.vue";

import Cadastro from "@/components/cadastro.vue"


export default {
  path: "/adicionar/",
  name: "adicionar",
  component: Cadastro,
  children: [
    {
      name: "Cadastro Pedido",
      path: "pedido",
      component: AddPedido
    },
    {
      name: "Cadastro Categoria",
      path: "categoria",
      component: AddCategoria
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

}