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
          <v-toolbar color="primary" dark flat>
            <v-toolbar-title>Cadastrar Sabor</v-toolbar-title>
          </v-toolbar>
        </v-card-title>

        <v-card-text>
          <form-sabor titulo="Sabor"></form-sabor>
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
import FormSabor from "./FormSabor.vue";
import {REMOVER_ALERTA} from '@/store/modules/mutations'

export default {
  name: "add-sabor",
  data() {
    return {
    };
  },
  components: {
    "form-sabor": FormSabor
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
      this.$store.dispatch('sabor/salvar', this.sabor)
      this.sabor = {}
    }
  },
  destroyed() {
    this.$store.commit(REMOVER_ALERTA, null, {root: true})
  }
};
</script>

