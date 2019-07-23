<template>
  <v-card disabled>
    <v-card-title>
      <v-toolbar color="primary" dark flat>
        <v-toolbar-title>Cadastrar Tamanho</v-toolbar-title>
      </v-toolbar>
    </v-card-title>

    <v-card-text>
      <v-form class="px-3">
        <v-text-field v-model.trim="tamanho.nome" label="Nome" :errorMessages="nomeValidator" />
        <v-layout row wrap>
          <v-flex xs12 md6>
            <v-text-field
              v-model.trim="tamanho.centimetros"
              label="Centímetros"
              :errorMessages="centimetrosValidator"
              suffix="cm"
            ></v-text-field>
          </v-flex>

          <v-flex xs12 md6>
            <v-text-field
              v-model.trim="tamanho.numeroFatias"
              type="number"
              label="Número de Fatias"
              suffix="fatias"
              :errorMessages="numeroFatiasValidator"
            ></v-text-field>
          </v-flex>
        </v-layout>

        <v-text-field
          v-model.trim="tamanho.preco"
          type="number"
          label="Preço de Venda"
          prefix="$"
          :errorMessages="precoValidator"
        ></v-text-field>
        <v-checkbox v-model="tamanho.disponivel" label="Disponivel"></v-checkbox>
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
import { ALERTAR } from "@/store/modules/mutations.js";
import {
  required,
  minLength,
  minValue,
  maxValue
} from "vuelidate/lib/validators";

export default {
  data: () => ({
    clicouSalvar: false,
    tamanho: {}
  }),

  validations: {
    tamanho: {
      nome: {
        required,
        minLength: minLength(5)
      },
      centimetros: {
        required,
        minValue: minValue(1)
      },
      numeroFatias: {
        required,
        minValue: minValue(1),
        maxValue: maxValue(50)
      },
      preco: {
        required,
        minValue: minValue(1)
      }
    }
  },
  computed: {
    nomeValidator() {
      if (this.clicouSalvar && this.$v.tamanho.nome.$invalid) {
        const errors = [];
        if (!this.$v.tamanho.nome.required) {
          errors.push("Nome do tamanho é obrigatório");
        }
        if (!this.$v.tamanho.nome.minLength) {
          errors.push(
            `Nome deve possuir pelo menos ${this.$v.tamanho.nome.$params.minLength.min} caracteres`
          );
        }
        return errors;
      } else {
        return null;
      }
    },
    centimetrosValidator() {
      if (this.clicouSalvar && this.$v.tamanho.centimetros.$invalid) {
        const errors = [];
        if (!this.$v.tamanho.centimetros.required) {
          errors.push("Medida em centímetros tamanho é obrigatório");
        }
        if (!this.$v.tamanho.centimetros.minValue) {
          errors.push(
            `Medida do tamanho deve ser maior que ${this.$v.tamanho.centimetros.$params.minValue.min}`
          );
        }
        return errors;
      } else {
        return null;
      }
    },
    numeroFatiasValidator() {
      if (this.clicouSalvar && this.$v.tamanho.numeroFatias.$invalid) {
        const errors = [];
        if (!this.$v.tamanho.numeroFatias.required) {
          errors.push("Número de fatias do tamanho é obrigatório");
        }
        if (!this.$v.tamanho.numeroFatias.minValue) {
          errors.push(
            `Número de fatias deve ser maior que ${this.$v.tamanho.numeroFatias.$params.minValue.min}`
          );
        }
        return errors;
      } else {
        return null;
      }
    },
    precoValidator() {
      if (this.clicouSalvar && this.$v.tamanho.preco.$invalid) {
        const errors = [];
        if (!this.$v.tamanho.preco.required) {
          errors.push("Preço do tamanho é obrigatório");
        }
        if (!this.$v.tamanho.preco.minValue) {
          errors.push(
            `Preço deve ser maior que ${this.$v.tamanho.preco.$params.minValue.min}`
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
      if (!this.$v.$invalid) {  // invalido = não valido; nao invalido => nao (nao valido) => valido
        this.$store
          .dispatch("tamanho/salvar", this.tamanho)
          .then(response => {
            this.clicouSalvar = false;

            // exibe mensagem de sucesso
            this.$store.commit(
              ALERTAR, // a mutation que será executada
              null,
              { root: true }// se a mutations é a root ou não
            );
            this.tamanho = {};
          })
          .catch(err => {
            // exibe mensagem de erro
            this.$store.commit(
              ALERTAR, // a mutation que será executada
              { type: "error", visivel: true, mensagem: "Ocorreu um erro" }, // o valor que é passado para a mutations
              { root: true } // se a mutations é a root ou não
            ); 
          });
      } else {
        // está incorreto
      }
    }
  }
};
</script>

