<template>
  <v-card-text>
    <v-layout row>
      <v-flex md4>
        <v-text-field label="Desconto" type="number" :value="desconto" v-model="desconto" id="input-desconto"></v-text-field>
      </v-flex>
    </v-layout>
    <v-layout row>
      <v-flex md4>
        <v-text-field 
        id="total-pedido"
        label="Total" 
        :value="total" 
        readonly/>
      </v-flex>
      <v-flex md4>
        <v-select
          v-model="formaPagamento.tipo"
          :items="['Cartão', 'Dinheiro']"
          label="Forma de Pagamento"/>
      </v-flex>
      <v-flex md2 v-if="formaPagamento.tipo === 'Dinheiro'">
        <v-text-field
          id="tipo-pagamento-pedido"
          v-model="formaPagamento.valorPago"
          label="Pago com"
          type="number"/>
      </v-flex>
      <v-flex md2 v-if="formaPagamento.tipo === 'Dinheiro'">
        <v-text-field
          id="troco-pagamento-pedido"
          :value="valorTroco"
          label="Troco"
          type="text"
          readonly/>
      </v-flex>
      <v-flex v-else>
        <v-text-field label="Bandeira" type="text" v-model="formaPagamento.bandeira"></v-text-field>
      </v-flex>
    </v-layout>
      </v-card-text>
</template>

<script>
import facade from '../../../facade';
export default {
  name:"info-pagamento",
  computed: {
    total() {
      return facade.pedido.getTotal()
    },
    desconto: {
      get() {
        return facade.pedido.getDesconto
      },
      set(desconto) {
        facade.pedido.setDesconto(desconto)
      }
    },
    formaPagamento:{
      get() {
        return facade.pedido.getFormaPagamento
      },
      set(novo){
        facade.pedido.setFormaPagamento(novo)
      }
    }
  },
  data: () => ({
    // formaPagamento: {
    //   valorPago: 0,
    //   troco: 0,
    //   bandeira: "",
    //   tipo: ""
    // }
  })

}
</script>

<style>

</style>