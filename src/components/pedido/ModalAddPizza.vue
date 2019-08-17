<template>
  <v-layout justify-center>
    <v-dialog v-model="dialog" scrollable max-width="600px">
      <template v-slot:activator="{ on }">
        <v-btn color="primary" v-on="on" :disabled="ativo">Selecionar Sabores</v-btn>
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
            <v-checkbox
              hide-details
              :label="sabor.nome"
              :value="sabor"
              v-model="saboresSelecionados"
            ></v-checkbox>
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
import SaborDao from "../../store/api/services/sabor.js";
import { mapGetters } from "vuex";
import { ItemPedido } from "./Modelos.js";

export default {
  name: "modal-add-pizza",
  data: () => ({
    produto: {
      id: "35990c12-c08f-11e9-9cb5-2a2ae2dbcce4",
      nome: "Pizza",
      preco: 0,
      pizza: true
    },
    sabores: [],
    tamanho: {},
    saboresSelecionados: [],
    dialog: false
  }),
  computed: {
    ...mapGetters(["getTamanho"]),
    ativo() {
      return this.getTamanho.id === undefined;
    }
  },
  created() {
    this.sabores = this.$store.getters.getSabores;
    if (this.sabores.length === 0) {
      SaborDao.listarTodos().then(({ data }) => {
        this.sabores = data;
        this.$store.commit("guardarSabores", data);
      });
    }
  },
  methods: {
    adicionar() {
      this.dialog = false;
      let sabores = []

      for (let index = 0; index < this.saboresSelecionados.length; index++) {
        const saborSelecionado = this.saboresSelecionados[index];
        sabores.push({sabor: saborSelecionado, itemPedido: null})
        
      }
      this.$store.commit('guardarItemPedido', {
        tamanho: this.tamanho,
        quantidade: 1,
        produto: this.produto,
        sabores: sabores
      })

      this.saboresSelecionados = [];
      this.$store.commit("guardarTamanho", {});
    },
    cancelar() {
      this.dialog = false;
    }
  }
};
</script>
