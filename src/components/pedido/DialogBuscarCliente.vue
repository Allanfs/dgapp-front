<template>
  <div>
    <v-dialog v-model="dialogSelecionarCliente" width="600">
      <template v-slot:activator="{ on }">
        <v-btn color="green" dark v-on="on">
          <v-icon left>add</v-icon>Adicionar
        </v-btn>
      </template>

      <v-card>
        <v-card-title class="headline grey lighten-2" primary-title>Buscar cliente</v-card-title>

        <v-card-text>
          <consultar-cliente></consultar-cliente>
        </v-card-text>

        <v-divider></v-divider>

        <v-card-actions>
          <div class="flex-grow-1"></div>
          <v-btn color="error" text @click="dialogSelecionarCliente = false">Sair</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import BuscarClienteCadastradoVue from '../cliente/BuscarClienteCadastrado.vue';
import ConsultarClienteVue from '../cliente/ConsultarCliente.vue';

export default {
  name: "dialog-buscar-cliente",
  components: {
    "consultar-cliente": ConsultarClienteVue
  },
  computed: {
    dialogSelecionarCliente: {
      get() {
        return this.$store.getters.dialogSelecionarCliente
      },
      set(novobool){
        this.$store.commit('dialogSelecionarCliente', novobool)
      }
    }
  },
  data: () => ({
  }),
  methods: {
  }
};
</script>
