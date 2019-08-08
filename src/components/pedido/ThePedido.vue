<template>
  <div>
    <lista-tamanhos v-model="tamanho"/>
    <lista-sabores v-model="sabores" :quantidadeMax="tamanho.numeroMaximoSabores"/>
  </div>
</template>

<script>
import ListaSabores from "./ListaSabores.vue";
import ListaTamanhos from "./ListaTamanhos.vue";

export default {
  name: "The-Pedido",
  components: {
    "lista-sabores": ListaSabores,
    "lista-tamanhos": ListaTamanhos
  },
  data: () => ({
    cliente: {},
    tamanho: {},
    sabores: []
  })
};
</script>

<style>
</style>
