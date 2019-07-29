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
            <v-text-field v-model="sabor.nome" label="Nome" :errorMessages="nomeValidator"></v-text-field>
          </v-flex>
          <v-flex>
            <v-checkbox v-model="sabor.especial" label="Especial"></v-checkbox>
          </v-flex>
        </v-layout>

        <selecionar-recheios v-model="sabor.recheios"/>
        <precificar-tamanhos @input="setPrecoTamanho"/>
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
import { required, minLength } from "vuelidate/lib/validators";

import DataTableSelecionavel from "@/components/utils/DataTableSelecionavel.vue";
import SelecionarRecheios from "./SelecionarRecheios.vue";
import PrecificarTamanhos from "./PrecificarTamanhos.vue";

export default {
  name: "add-sabor",
  props: ["param"],
  components: {
    DataTableSelecionavel,
    "selecionar-recheios": SelecionarRecheios,
    "precificar-tamanhos": PrecificarTamanhos
  },
  validations: {
    sabor: {
      nome: {
        required,
        minLength: minLength(5)
      }
      
    }
  },
  data: () => ({
    clicouSalvar: false,
    headers: HSABOR,
    dado: [], // contem todos os recheios
    sabor: {
      nome: "",
      precos: [],
      especial: true,
      recheios: [],
      tamanhos: []
    }
  }),
  computed: {
    todosRecheios() {
      return this.$store.getters["recheio/allRecheios"];
    },
    categorias() {
      return [...new Set(this.todosRecheios.map(x => x.categoria))];
    },
    nomeValidator() {
      if (this.clicouSalvar && this.$v.sabor.nome.$invalid) {
        const errors = [];
        if (!this.$v.sabor.nome.required) {
          errors.push("Nome do sabor é obrigatório");
        }
        if (!this.$v.sabor.nome.minLength) {
          errors.push(
            `Nome deve possuir pelo menos ${this.$v.sabor.nome.$params.minLength.min} caracteres`
          );
        }
        return errors;
      } else {
        return null;
      }
    }
  },
  methods: {
    save() {
      this.clicouSalvar = true;
      if (!this.$v.$invalid) {
        this.sabor.tamanhos.forEach(({id, preco, nome}) => {
          this.sabor.precos.push({
            preco: tamanho.preco,
            tamanho: { id: tamanho.id, nome: tamanho.nome }
          })
        })
        this.clicouSalvar = false;
        console.log(this.sabor);
        this.$store.dispatch("sabor/salvar", this.sabor).then(r=>console.log('sucesso'));
      }
      // this.sabor = {};
    },
    setPrecoTamanho(preco) {
      this.sabor.precos.push(preco);
    }
  }
};
</script>

