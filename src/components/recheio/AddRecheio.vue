<template>
  <v-card disabled>
    <v-card-title>
      <v-toolbar color="primary" dark flat>
        <v-toolbar-title>Cadastrar Recheio</v-toolbar-title>
      </v-toolbar>
    </v-card-title>

    <v-card-text>
      <v-form class="px-3">
        <v-text-field v-model="recheio.nome" label="Nome" :errorMessages="nomeValidator"></v-text-field>
        <v-checkbox v-model="recheio.especial" label="Especial"></v-checkbox>
        <v-checkbox v-model="recheio.disponivel" label="Disponível"></v-checkbox>
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
import { required, minLength } from "vuelidate/lib/validators";

export default {
  name: "add-recheio",
  data: () => ({
    clicouSalvar: false,
    recheio: {
      nome: "",
      especial: false,
      disponivel: true
    }
  }),
  validations: {
    recheio: {
      nome: {
        required,
        minLength: minLength(2)
      }
    }
  },
  computed: {
    nomeValidator() {
      if (this.clicouSalvar && this.$v.recheio.nome.$invalid) {
        const errors = [];
        if (!this.$v.recheio.nome.required) {
          errors.push("Nome do recheio é obrigatório");
        }
        if (!this.$v.recheio.nome.minLength) {
          errors.push(
            `Nome deve possuir pelo menos ${this.$v.recheio.nome.$params.minLength.min} caracteres`
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
        this.$store
          .dispatch("recheio/salvar", this.recheio)
          .then(response => {
            this.clicouSalvar = false;
            this.$store.commit(
              ALERTAR, // a mutation que será executada
              null,
              { root: true }  // se a mutations é a root ou não
            ); 

            this.recheio = {
              nome: "",
              especial: false,
              disponivel: true
            };
          })
          .catch(error => {
            this.$store.commit(
              ALERTAR, // a mutation que será executada
              { type: "error", visivel: true, mensagem: "Ocorreu um erro" }, // o valor que é passado para a mutations
              { root: true }  // se a mutations é a root ou não
            );
          });
      }
    }
  }
};
</script>

