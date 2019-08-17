<template>
  <v-list two-line subheader>
    <v-subheader :class="produto ? 'green' : 'white'">Produtos</v-subheader>
    <v-list-group>
      <v-radio-group v-model="produto">
        <v-list-tile v-for="produtoIt in produtos" :key="produtoIt.id">
          <v-list-tile-action>
            <v-radio :value="produtoIt" @change="$emit('input', produtoIt)"></v-radio>
            <!-- selecionar o checkbox deve ser unico -->
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>{{produtoIt.nome}}</v-list-tile-title>
            <v-btn @click="adicionar(produtoIt)">Adicionar</v-btn>
          </v-list-tile-content>
        </v-list-tile>
      </v-radio-group>
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
      this.$store.commit('adicionarItemPedido', produto)
    }
  }
};
</script>

