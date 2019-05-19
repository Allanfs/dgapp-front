<template>
  <v-card>
    <v-card-title>
      <v-toolbar color="primary" dark flat>
        <v-toolbar-title>{{titulo}} Sabor</v-toolbar-title>
      </v-toolbar>
    </v-card-title>

    <v-card-text>
      <v-form class="px-3">
        <v-layout>
          <v-flex>
            <v-text-field v-model="sabor.nome" label="Nome"></v-text-field>
          </v-flex>
          <v-flex>
            <v-checkbox v-model="sabor.especial" label="Especial"></v-checkbox>
          </v-flex>
        </v-layout>

        <DataTableSelecionavel :headers="headers" :recheio="dado" v-model="sabor.recheios"></DataTableSelecionavel>

        <v-card>
          <v-card-title>
            <div>
              <h3 class="headline mb-0">Preços</h3>
            </div>
          </v-card-title>
          <v-card-text>
            <v-layout row wrap v-for="tamanho in sabor.tamanhos" :key="tamanho.nome">
              <v-flex xs12 md2>
                <v-text-field v-model="tamanho.nome" label="Tamanho" disabled></v-text-field>
              </v-flex>
              <v-flex xs12 md1>
                <v-text-field type="number" label="Valor" v-model="tamanho.preco"></v-text-field>
              </v-flex>
            </v-layout>
            <v-divider></v-divider>
            <!-- </v-container> -->
          </v-card-text>
        </v-card>
      </v-form>
    </v-card-text>

    <v-card-actions class="pb-3 pl-3">
      <v-btn class="success" block @click="save">Salvar</v-btn>
      <v-btn class="error" block>Cancelar</v-btn>
    </v-card-actions>
  </v-card>
</template>
<script>
import { REMOVER_ALERTA } from "@/store/modules/mutations";
import { RECHEIOVR } from "@/store/vuexroutes/recheio.vr.js";
import { HSABOR } from "@/components/utils/cabecalhosTabelas.js";
import { TAMANHOVR } from "@/store/vuexroutes/tamanho.vr.js";
import { SABORVR } from "@/store/vuexroutes/sabor.vr.js";

import DataTableSelecionavel from "@/components/utils/DataTableSelecionavel.vue";
export default {
  name: "add-sabor",
  props: ["param"],
  components: {
    DataTableSelecionavel
  },
  data() {
    return {
      edicao: false,
      headers: HSABOR,
      dado: [],
      sabor: {
        nome: "",
        preco: "",
        especial: true,
        recheios: [],
        tamanhos: []
      }
    };
  },
  created() {
  
    this.dado = this.$store.getters[RECHEIOVR.getGetter('listaRecheios')]
    
    this.sabor.tamanhos = this.$store.getters[TAMANHOVR.getGetter('listaTamanhos')]

    let saborEditar = this.$store.getters[SABORVR.getGetter('itemEditavel')]
    if( saborEditar !== null) {
      this.sabor = saborEditar
      this.edicao = true
    }
  },
  computed: {
    todosRecheios() {
      return []; //this.$store.getters["recheio/allRecheios"];
    },
    categorias() {
      return [...new Set(this.todosRecheios.map(x => x.categoria))];
    },
    titulo() {
      return this.edicao ? "Editar" : "Cadastrar";
    }
  },
  methods: {
    save() {
      if (this.edicao) {

        this.$store.dispatch(SABORVR.getAction('salvar'), this.sabor);
        this.$store.commit(SABORVR.getMutation('limparItemEditavel'));
        this.edicao = false;
      } else {
        this.$store.dispatch(SABORVR.getAction('salvar'), this.sabor);
      }
        this.sabor = {};
    }
  }
};
</script>

