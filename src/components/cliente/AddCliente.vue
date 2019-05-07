<template>
  <div>
    <v-container fluid grid-list-md>
      <v-alert
        :value="mensagemAlerta.visivel"
        @input="mensagemAlerta =false"
        :type="mensagemAlerta.type"
        dismissible
        transition="fade-transition"
      >{{mensagemAlerta.mensagem}}</v-alert>
      <v-card disabled>
        <v-card-title>
          <h2>Cadastrar Cliente</h2>
        </v-card-title>

        <v-card-text>
          <form-cliente titulo="Cliente"></form-cliente>
        </v-card-text>

        <v-card-actions class="pb-3 pl-3">
          <v-btn class="success" block @click="save">Salvar</v-btn>
          <v-btn class="error" block>Cancelar</v-btn>
        </v-card-actions>
      </v-card>
    </v-container>
  </div>
</template>
<script>
import FormCliente from "./FormCliente.vue";
import {REMOVER_ALERTA} from '@/store/modules/mutations'

export default {
  name: 'add-cliente',
  data() {
    return {
    };
  },
  components: {
    "form-cliente": FormCliente
  },
  computed: {
    mensagemAlerta: {
      get: function () {
        return this.$store.getters.getAlerta
      },
      set: function (value) { 
        this.$store.commit(REMOVER_ALERTA, null, {root: true})
      }
    }
  },
  methods: {
    save() {
      this.$store.dispatch('cliente/salvar', this.cliente)
      this.cliente = {}

    }
  },
  destroyed() {
    this.$store.commit(REMOVER_ALERTA, null, {root: true})
  }
};
</script>

