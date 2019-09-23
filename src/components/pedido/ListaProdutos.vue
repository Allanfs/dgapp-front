<template>
  <v-list two-line subheader>
    <v-list-group>
      <template v-slot:activator>
        <v-subheader>Produtos</v-subheader>
      </template>
        <v-list-tile v-for="produtoIt in produtos" :key="produtoIt.id">
          <v-list-tile-action>
            <v-btn @click="adicionar(produtoIt)">Adicionar</v-btn>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>{{produtoIt.nome}}</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
    </v-list-group>
  </v-list>
</template>

<script>
import produtoDao from "../../store/api/services/produto.js";
import { ItemPedido } from './Modelos';
import facade from '../../facade';
export default {
  name: "lista-produtos",
  data: () => ({
    produtos: [],
    produto: null
  }),
  async mounted() {
    // obter produtos cadastrados.
    await produtoDao.listarTodos().then(({ data }) => (this.produtos = data));
    this.produtos.forEach(produto => {
      if(isNaN(produto.preco)){
        produto.preco = produto.preco.substring(1,produto.preco.length)
      }
    })
  },
  methods: {
    adicionar(produto) {
      facade.pedido.adicionarItemPedido(new ItemPedido(null,produto, 1))
    }
  }
};
</script>

