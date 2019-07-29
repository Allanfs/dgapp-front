<template>
<div>
  <v-layout row v-for="tamanho in tamanhos" :key="tamanho.id" >
    <v-flex md2><v-text-field v-model="tamanho.nome" disabled></v-text-field></v-flex>
    <v-flex md1><v-text-field v-model="tamanho.precoPadrao" type="number" @blur="settarPreco(tamanho, tamanho.precoPadrao)"></v-text-field></v-flex>
  </v-layout>
  </div>
</template>

<script>
import tamanhoDao from "../../store/api/services/tamanho.js";

export default {
  name: 'Precificar-Tamanhos',
  data: () => ({
    tamanhos: [],
    precoTamanho: []
  }),
  methods:{
    settarPreco({id},preco){
      this.$emit('input',{tamanho: {id}, preco});
    }
  },
  mounted() {
    tamanhoDao.listarTodos().then(({data}) => this.tamanhos = data);
  }
    /*
      {
        preco: novoPreco,
        tamanho: {
          id: tamanho.id
        }
      }
    */
}
</script>

<style>

</style>
