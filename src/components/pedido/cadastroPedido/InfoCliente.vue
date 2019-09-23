<template>
  <v-card id="card-cliente">
      <v-card-title>
        <h3>Cliente</h3>
        <dialog-buscar-cliente id="buscar-cliente" />
      </v-card-title>
      <v-card-text>
        <v-layout wrap grid-list-md>
          <v-flex>Nome: {{nome}}</v-flex>
          <v-flex>Telefone:{{telefone.numero}}</v-flex>
          <v-flex>Endereço:{{endereco.rua}}</v-flex>
          <v-flex>Complemento: {{endereco.complemento}}</v-flex>
        </v-layout>
      </v-card-text>
    </v-card>
</template>

<script>
import DialogBuscarClienteVue from '../DialogBuscarCliente.vue';
import facade from '../../../facade';

export default {
  name: "info-cliente",
  components: {
    "dialog-buscar-cliente" : DialogBuscarClienteVue
  },
  computed: {
    nome() {
      if(this.clienteSettado()){
        return this.cliente.nome
      }
      return {}
    },
    telefone() {
        if(this.clienteSettado()){
          return this.cliente.telefone
        }
      return {}
    },
    endereco() {
      if(this.clienteSettado()){
        return this.cliente.endereco
      }
      return {}
    },
    cliente() {
      return facade.cliente.get()
    }
  },
  data: ()=> ({}),
  methods: {
    clienteSettado() {
      if (this.cliente) {
        return true
      } else {
        return false
      }
    }  
  }
}
</script>

<style>

</style>