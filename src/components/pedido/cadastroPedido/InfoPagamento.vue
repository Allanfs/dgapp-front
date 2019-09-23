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
          v-model="tipo"
          :items="['Cartão', 'Dinheiro']"
          label="Forma de Pagamento"/>
      </v-flex>
      <v-flex md2 v-if="tipo === 'Dinheiro'">
        <v-text-field
          id="tipo-pagamento-pedido"
          v-model="valorPago"
          label="Pago com"
          type="number"/>
      </v-flex>
      <v-flex md2 v-if="tipo === 'Dinheiro'">
        <v-text-field
          id="troco-pagamento-pedido"
          :value="valorTroco"
          label="Troco"
          type="text"
          readonly/>
      </v-flex>
      <v-flex v-if="tipo === 'Cartão'">
        <v-text-field label="Bandeira" type="text" v-model="bandeira"></v-text-field>
      </v-flex>
    </v-layout>
      </v-card-text>
</template>

<script>
import facade from '../../../facade';
class formaPagamento {
  constructor(tipo, valorPago, bandeira, valorTroco){
    this.tipo = tipo
    this.valorPago = valorPago
    this.bandeira = bandeira
    this.valorTroco = valorTroco

  }
}
export default {
  name:"info-pagamento",
  computed: {
    total() {
      let desconto = facade.pedido.getDesconto()
      if (!desconto || desconto === NaN) {
        desconto = 0
      }
      return (facade.pedido.getTotal() - desconto).toFixed(2)
    },
    desconto: {
      get() {
        return facade.pedido.getDesconto()
      },
      set(desconto) {
        let vlDesconto = 0
        if (desconto !== undefined || desconto !== null || desconto !== NaN || desconto > 0) {
          vlDesconto = parseFloat(desconto)
        }
          facade.pedido.setDesconto(vlDesconto)
      }
    },
    formaPagamento:{
      get() {
        return facade.pedido.getFormaPagamento()
      },
      set({tipo, bandeira, valorPago, valorTroco}){
        console.log({tipo, bandeira, valorPago, valorTroco})
        facade.pedido.setFormaPagamento({tipo, bandeira, valorPago, valorTroco})
      }
    },
    valorTroco:{
      get() {
        return facade.pedido.getValorTroco()
      },
      set(n){
        facade.pedido.setValorTroco(n)
      }
    },
    valorPago: {
      get() {
        return facade.pedido.getValorPago()
      },
      set(valor){
        let vl = 0
        let vlTroco = 0
        if (valor < 0) {
          vl = 0
          vlTroco = 0
        } else if (valor || valor > 0) {
          vl = valor
          vlTroco = parseFloat(vl - this.total)
        } 
        facade.pedido.setValorTroco(vlTroco)
        facade.pedido.setValorPago(parseFloat(vl))
      }
    },
    bandeira: {
      get() {
        return facade.pedido.getBandeira()
      },
      set(n){
        facade.pedido.setBandeira(n)
      }
    },
    tipo: {
      get() {
        return facade.pedido.getTipo()
      },
      set(n){
        facade.pedido.setTipo(n)
      }
    }
  },
  data: () => ({
  })

}
</script>
