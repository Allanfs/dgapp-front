<template>
  <v-form class="px-3">
    <v-text-field @input="inputando" v-model="produto.nome" label="Nome"></v-text-field>
    <v-text-field @input="inputando" v-model="produto.precoVenda" type="number" label="Preço de Venda" prefix="$"></v-text-field>
    <v-text-field @input="inputando" v-model="produto.precoCusto" type="number" label="Preço de Custo" prefix="$"></v-text-field>
    <v-text-field @input="inputando" v-model="produto.descricao" label="Descrição"></v-text-field>
    <v-checkbox @input="inputando" v-model="produto.ativo" label="Ativo"></v-checkbox>
  </v-form>
</template>
<script>
export default {
  name: "form-produto",
  data() {
    return {
      produto: {
        nome: "",
        precoVenda: "",
        precoCusto: "",
        descricao: "",
        ativo: true
      }
    };
  },
  methods: {
    /**
     * Informa ao componente pai que houve input
     * e envia o objeto como payload
     */
    inputando() {
      this.$emit("input", this.produto);
    }
  }
};
</script>

