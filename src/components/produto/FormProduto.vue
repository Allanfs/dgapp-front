<template>
  <v-form class="px-3">
    <v-text-field v-model="produto.nome" label="Nome"></v-text-field>
    <v-text-field v-model="produto.precoVenda" type="number" label="Preço de Venda" prefix="$"></v-text-field>
    <v-text-field v-model="produto.precoCusto" type="number" label="Preço de Custo" prefix="$"></v-text-field>
    <v-text-field v-model="produto.descricao" label="Descrição"></v-text-field>
    <v-checkbox v-model="produto.ativo" label="Ativo"></v-checkbox>
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
  }
};
</script>

