<template>
  <v-card>
    <v-card-title>
      <v-toolbar color="primary" dark flat>
        <v-toolbar-title>Cadastrar Sabor</v-toolbar-title>
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

        <DataTableSelecionavel
          :headers="headers"
          :recheio="dado"
          v-model="sabor.recheios"
        ></DataTableSelecionavel>

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
import { HSABOR } from "@/components/utils/cabecalhosTabelas.js";

import DataTableSelecionavel from "@/components/utils/DataTableSelecionavel.vue";
export default {
  name: "add-sabor",
  props: ['param'],
  components: {
    DataTableSelecionavel
  },
  data() {
    return {
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
    // obter apenas os nomes dos tamanhos.
    // os preços apenas o Sabor irá settar
    // tem uma sintaxe que faz isso muito bem, não lembro qual
    // this.sabor.tamanhos = this.$store.getters["tamanho/allTamanhos"];
    // console.log(this.param)
    this.$store.getters["recheio/recheiosCadastrados"]().then( (response) => {
      this.dado = response.data
    }).catch( error => {
      console.log(error.error)
    })
    this.$store.getters["tamanho/tamanhosCadastrados"]().then( response => {
      this.sabor.tamanhos = response.data
    })

    // obtendo o parametro presente na rota
    // console.log(this.$route.params["id"]);
    // consultar o dado na API
  },
  computed: {
    todosRecheios() {
      return this.$store.getters["recheio/allRecheios"];
    },
    categorias() {
      return [...new Set(this.todosRecheios.map(x => x.categoria))];
    }
  },
  methods: {
    save() {
      this.$store.dispatch("sabor/salvar", this.sabor);
      this.sabor = {};
    }
  }
};
</script>

