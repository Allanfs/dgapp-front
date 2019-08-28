<template>
  <v-list two-line subheader>
    <v-list-group>
      <template v-slot:activator>
        <v-subheader>Produtos</v-subheader>
      </template>
        <v-list-tile v-for="produtoIt in produtos" :key="produtoIt.id">
          <v-list-tile-action>
            <!-- <v-radio :valu e="produtoIt" @change="$emit('input', produtoIt)"></v-radio> -->
            <v-btn @click="adicionar(produtoIt)">Adicionar</v-btn>
            <!-- selecionar o checkbox deve ser unico -->
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
export default {
  name: "lista-produtos",
  data: () => ({
    produtos: [],
    produto: null
  }),
  mounted() {
    // obter produtos cadastrados.
    produtoDao.listarTodos().then(({ data }) => (this.produtos = data));
  },
  methods: {
    adicionar(produto) {
      this.$store.commit('adicionarItemPedido', {produto}) // guardando aqui já vai para a listagem de itens
    }
  }
};
</script>

