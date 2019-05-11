<template>
  <v-stepper v-model="el" vertical>
    <v-stepper-header>
      <v-stepper-step :complete="el > 1" step="1" editable>Cliente</v-stepper-step>

      <v-divider></v-divider>

      <v-stepper-step :complete="el > 2" step="2" editable>Itens do Pedido</v-stepper-step>

      <v-divider></v-divider>

      <v-stepper-step step="3" editable>Forma de Pagamento</v-stepper-step>
    </v-stepper-header>

    <v-stepper-items>
      <v-stepper-content step="1">
        <v-card class="mb-5" color="grey lighten-1" >
        </v-card>

       <v-layout>
        <v-btn icon color="info" @click="voltar"><v-icon>arrow_left</v-icon></v-btn>
        <v-btn color="primary" @click="avancar">Próximo</v-btn>


        <v-spacer></v-spacer>
        <v-btn icon color="error"  to="/"><v-icon>delete</v-icon></v-btn>
       </v-layout>
      </v-stepper-content>

      <v-stepper-content step="2">
        <v-card class="mb-5" color="grey lighten-1" height="200px"></v-card>

       <v-layout>
          <v-btn icon color="info" @click="voltar"><v-icon>arrow_left</v-icon></v-btn>
          <v-btn color="primary" @click="avancar">Próximo</v-btn>
          <v-spacer></v-spacer>
          <v-btn icon color="error"  to="/"><v-icon>delete</v-icon></v-btn>
       </v-layout>

      </v-stepper-content>

      <v-stepper-content step="3">
        <v-card class="mb-5" color="grey lighten-1" height="200px"></v-card>
       <v-layout>

          <v-btn icon color="info" @click="voltar"><v-icon>arrow_left</v-icon></v-btn>
          <v-btn color="primary" >Concluir Pedido</v-btn>
          <v-spacer></v-spacer>
          <v-btn icon color="error"  to="/"><v-icon>delete</v-icon></v-btn>
       </v-layout>

      </v-stepper-content>
    </v-stepper-items>
  </v-stepper>
</template>

<script>
import AddCliente from '@/components/cliente/AddCliente.vue'
export default {
  components: {
    'add-cliente': AddCliente
  },
  data () {
    return {
      el: 0
    }
  },
  methods: {
    avancar() {
      this.el++
    },
    voltar() {
      this.el--
    }
  }
};
</script>

<style>
</style>
