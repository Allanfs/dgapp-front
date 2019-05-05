<template>
  <!-- OBJETIVO: modal para cadastro de endereço -->
  <v-dialog v-model="dialog" max-width="60%">
    <v-btn slot="activator" class="info">
      <v-icon small left>add</v-icon>Adicionar Endereço
    </v-btn>
    <v-card>
      <v-container grid-list-md>
        <v-card-title>
          <h2>Adicionar Endereço</h2>
        </v-card-title>
        <v-card-text>
          <v-form>
            <v-layout row wrap>
              <v-flex xs12 sm10 md5>
                <v-text-field v-model="endereco.logradouro" label="Rua"></v-text-field>
              </v-flex>
              <v-flex xs12 sm2 md3>
                <v-text-field v-model="endereco.numero" label="Número"></v-text-field>
              </v-flex>
              <v-flex xs12 sm3 md4>
                <v-text-field v-model="endereco.bairro" label="Bairro" value></v-text-field>
              </v-flex>
            </v-layout>
          </v-form>
        </v-card-text>
        <v-card-actions>
          <v-btn color="blue darken-1" flat @click="salvar" :disabled="camposObrigatorios">Salvar</v-btn>
          <v-btn color="blue darken-1" flat @click="dialog = !dialog">Cancelar</v-btn>
        </v-card-actions>
      </v-container>
    </v-card>
  </v-dialog>
</template>
<script>
import { mapGetters, mapMutations } from "vuex";

export default {
  name: "form-endereco",
  data() {
    return {
      endereco: {
        logradouro: "",
        bairro: "Centro",
        numero: "",
        complemento: ""
      }
    };
  },
  methods: {
    ...mapMutations(["toggle"]),
    salvar() {
      // verificar se o id do endereco está settado
      // se estiver significa que é uma edição de um já existente
      // se não, cria um novo

      console.log(this.endereco);
      this.dialog = false;
      // let newEndereco = this.endereco
      // this.$emit('inputEndereco', {nome: 'enderecos', payload: newEndereco})
      this.endereco = {
        logradouro: "",
        bairro: "Centro",
        numero: "",
        complemento: ""
      };
    }
  },
  computed: {
    camposObrigatorios() {
      if (this.endereco.logradouro === "") {
        return true;
      } else {
        return false;
      }
    },
    /**
     * Propriedade que define se o dialogo será exibido
     * ou não
     */
    dialog: {
      get: function() {
        this.endereco = this.$store.getters.getItem;
        return this.$store.getters.isAberto;
      },
      set: function(novoValor) {
        this.$store.commit("toggle");
        /**
         *  Identifico qual o valor de state,
         * se está falso, anteriormente esteve verdadeiro
         * logo, existe algum valor no store de item,
         * e é preciso esvazia-lo.
         *  Se estou fechando o popup então não deve mais
         * haver nenhum valor exibido nele
         */
        if (this.$store.getters.isAberto === false) {
          this.endereco = {};
          this.$store.commit("setItem", {});
        }
      }
    }
  },
  created() {}
};
</script>

