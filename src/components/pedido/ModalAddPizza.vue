<template>
  <v-layout justify-center>
    <v-dialog v-model="dialog" scrollable max-width="600px">
      <template v-slot:activator="{ on }">
        <v-btn color="primary"  v-on="on" :disabled="ativo" >Selecionar Sabores</v-btn>
      </template>
      <v-card>
        <v-card-title>
          <h3>{{getTamanho.nome}}</h3>
          <v-spacer></v-spacer>
          {{saboresSelecionados.length}}/{{getTamanho.numeroMaximoSabores}}
        </v-card-title>
        <v-divider></v-divider>
        <v-card-text style="height: 300px;">
          <div v-for="sabor in sabores" :key="sabor.id">
            <v-checkbox hide-details :label="sabor.nome" :value="sabor" v-model="saboresSelecionados"></v-checkbox>
          </div>
        </v-card-text>
        <v-divider></v-divider>
        <v-card-actions>
          <v-btn color="red darken-1" flat @click="cancelar">Cancelar</v-btn>
          <v-btn color="green darken-1" flat @click="adicionar">Adicionar</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-layout>
</template>

<script>
import SaborDao from "../../store/api/services/sabor.js"
import {mapGetters} from 'vuex';
import {ItemPedido} from "./Modelos.js";

export default {
  name: "modal-add-pizza",
  data: () => ({
    sabores: [],
    tamanho: {},
    saboresSelecionados: [],
    dialog: false
  }),
  computed: {
    ...mapGetters(['getTamanho']),
    ativo() {
      return this.getTamanho.id === undefined
    }
  },
  created() {
    this.sabores = this.$store.getters.getSabores;
    if (this.sabores.length === 0) {
      SaborDao.listarTodos().then( ({data}) => {
        this.sabores = data;
        this.$store.commit('guardarSabores', data);
      })
    }
    
  },
  methods: {
    adicionar() {
      this.dialog = false;
      let itemPedido = new ItemPedido;
      itemPedido.pizza.pizza = true;
      itemPedido.pizza.tamanho = this.getTamanho;
      itemPedido.pizza.sabores = this.saboresSelecionados;
      itemPedido.calcularPreco();

      itemPedido.quantidade = 1;
      this.$store.commit('guardarItemPedido', itemPedido);

      this.saboresSelecionados = []
      this.$store.commit('guardarTamanho', {})
    },
    cancelar() {
      this.dialog = false;
    }
  }
};
</script>
