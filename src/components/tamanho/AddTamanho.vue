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
            <v-toolbar-title>Cadastrar Tamanho</v-toolbar-title>
          </v-toolbar>
        </v-card-title>

        <v-card-text>
          <v-form class="px-3">
            <v-text-field v-model="tamanho.nome" label="Nome"></v-text-field>
            <v-layout row wrap>
              <v-flex xs12 md6>
                <v-text-field v-model="tamanho.centimetros" label="Centiímetros" suffix="cm"></v-text-field>
              </v-flex>

              <v-flex xs12 md6>
                <v-text-field v-model="tamanho.fatias" type="number" label="Número de Fatias" suffix="fatias"
                ></v-text-field>
              </v-flex>
            </v-layout>

            <v-text-field v-model="tamanho.preco" type="number" label="Preço de Venda" prefix="$"></v-text-field>
            <v-checkbox v-model="tamanho.disponivel" label="Disponivel"></v-checkbox>
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
  preco: "",
  disponivel: true
};
export default {
  data() {
    return {
      tamanho: modelo
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
      this.$store.dispatch('tamanho/salvar', this.tamanho)
      this.tamanho = modelo;
    }
  },
  destroyed() {
    this.$store.commit(REMOVER_ALERTA, null, {root: true})
  }
};
</script>

