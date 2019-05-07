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
            <v-toolbar-title>Cadastrar Recheio</v-toolbar-title>
          </v-toolbar>
        </v-card-title>

        <v-card-text>
          <v-form class="px-3">
            <v-text-field v-model="recheio.nome" label="Nome"></v-text-field>
            <v-checkbox v-model="recheio.especial" label="Especial"></v-checkbox>
            <v-checkbox v-model="recheio.disponivel" label="Disponível"></v-checkbox>
          </v-form>
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
import {REMOVER_ALERTA} from '@/store/modules/mutations'

const modelo = {
  nome: "",
  especial: false,
  disponivel: true
};

export default {
  name: "add-recheio",
  data () {
    return {
      recheio: modelo,
    };
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
    save () {
      this.$store.dispatch('recheio/salvar', this.recheio)
      this.recheio = modelo;
    }
  },
  destroyed() {
    this.$store.commit(REMOVER_ALERTA, null, {root: true})
  }
};
</script>

