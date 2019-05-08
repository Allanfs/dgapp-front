<template>
  <v-card>
    <v-card-title>
      <v-toolbar color="primary" dark flat>
        <v-toolbar-title>Cadastrar Sabor</v-toolbar-title>
      </v-toolbar>
    </v-card-title>

    <v-card-text>
      <v-form class="px-3">
        <v-text-field v-model="sabor.nome" label="Nome"></v-text-field>
        <v-text-field v-model="sabor.preco" type="number" label="Preço de Venda" prefix="$"></v-text-field>
        <v-checkbox v-model="sabor.especial" label="Especial"></v-checkbox>

        <v-card flat>
          <v-card-text>
            <v-container fluid>
              <v-layout row wrap>
                <v-flex xs12 sm6 md4 v-for="categoria in categorias">
                  <h4>{{categoria}}</h4>
                  <span v-for="recheio in todosRecheios.filter( x => x.categoria === categoria)">
                    <v-checkbox
                      :disabled="!recheio.disponivel"
                      v-model="sabor.recheiosSelecionados"
                      :label="recheio.nome"
                      :value="recheio.nome"
                    ></v-checkbox>
                  </span>
                </v-flex>
              </v-layout>
            </v-container>
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

export default {
  name: "add-sabor",
  data() {
    return {
      sabor: {
        nome: "",
        preco: "",
        especial: true,
        recheiosSelecionados: []
      }
    };
  },
  created() {
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

