<template>
  <v-card>
    <v-card-title>
        <h3>Itens</h3>
        <dialog-add-item-pedido id="adicionar-item-pedido" />
      </v-card-title>
      <v-card-text id="card-itens-itens">
        <itens-pedido v-bind:itens="itensPedido"/>
      </v-card-text>
  </v-card>
</template>

<script>
import DialogAdicionarItemPedidoVue from "../DialogAdicionarItemPedido.vue";
import ListaItemPedidoVue from '../ListaItemPedido.vue';
export default {
  name: "bloco-itens-pedido",
  components: {
    "dialog-add-item-pedido": DialogAdicionarItemPedidoVue,
    "itens-pedido": ListaItemPedidoVue
  },
  computed: {
    itensPedido() {
      return []
    }
  },
  data: () => ({})


}
</script>

<style>

</style>