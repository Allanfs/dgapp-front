<template>
  <v-card disabled>
    <v-card-title>
      <h2>{{tituloFormulario}}</h2>
    </v-card-title>

    <v-card-text>
      <v-form>
        <v-layout>
          <v-flex xs12 sm6>
            <v-text-field v-model="cliente.nome" label="Nome"></v-text-field>
          </v-flex>
          <!-- <v-spacer></v-spacer> -->
          <v-flex xs12 sm2>
            <v-text-field v-model="cliente.cpf" label="CPF" mask="###.###.###-##"></v-text-field>
          </v-flex>
          <!-- <v-spacer></v-spacer> -->
          <v-flex xs12 sm2>
            <v-text-field v-model="cliente.dataNascimento" type="date" label="Data Nascimento"></v-text-field>
          </v-flex>
        </v-layout>

        <!-- redes sociais -->
        <!-- <v-layout row wrap>
              <v-flex xs12 sm2>
                <v-text-field
                  v-model="cliente.instagram"
                  label="Instagram"
                  prefix="@"
                ></v-text-field>
              </v-flex>
              <v-flex xs12 sm2>
                <v-text-field
                  v-model="cliente.facebook"
                  label="Facebook"
                  prefix="/"
                ></v-text-field>
              </v-flex>
        </v-layout>-->

        <v-card flat>
          <v-layout row wrap>
              <v-flex xs12 sm2 md1>
                <v-text-field v-model="cliente.telefone[0].ddd" type="number" label="DDD" required></v-text-field>
              </v-flex>
              <v-flex xs12 sm5 md3>
                <v-text-field v-model="cliente.telefone[0].numero" label="Número*" mask="#####-####" required></v-text-field>
              </v-flex>
              <v-flex xs12 sm5 md4>
                <v-text-field v-model="cliente.telefone[0].observacao" label="Observação"></v-text-field>
              </v-flex>
              <v-flex>
                <v-checkbox v-model="cliente.telefone[0].whatsapp" label="É Whatsapp"></v-checkbox>
              </v-flex>
            </v-layout>
        </v-card>
        <v-card flat>
          <v-layout row wrap>
              <v-flex xs12 sm10 md5>
                <v-text-field v-model="cliente.endereco[0].rua" label="Rua"></v-text-field>
              </v-flex>
              <v-flex xs12 sm2 md3>
                <v-text-field v-model="cliente.endereco[0].numero" label="Número"></v-text-field>
              </v-flex>
              <v-flex xs12 sm3 md4>
                <v-text-field v-model="cliente.endereco[0].bairro" label="Bairro" value></v-text-field>
              </v-flex>
              <v-flex xs12 sm5 md12>
                <v-text-field v-model="cliente.endereco[0].complemento" label="Complemento"></v-text-field>
              </v-flex>
            </v-layout>
        </v-card>
      </v-form>
    </v-card-text>

    <v-card-actions class="pb-3 pl-3">
      <v-btn class="success" block @click="selecionarCliente">Selecionar</v-btn>
    </v-card-actions>
  </v-card>
</template>
<script>
import FormEnderecoVue from "../endereco/FormEnderecoPopup.vue";
import FormTelefoneVue from "../telefone/FormTelefonePopup.vue";

import { REMOVER_ALERTA } from "@/store/modules/mutations";
import { HENDERECO, HTELEFONE } from "../utils/cabecalhosTabelas.js";
import facade from "../../facade"

export default {
  name: "add-cliente",
  props: {
    titulo: String
  },
  components: {
    endereco: FormEnderecoVue,
    telefone: FormTelefoneVue
  },
  computed: {
    tituloFormulario() {
      return this.titulo ? this.titulo : 'Cadastrar Cliente';
    }
  },
  data() {
    return {
      // cliente: {
      //   id: "b0e833f0-8d06-11e9-bc42-526af7764f64",
      //   telefone: [
      //     {
      //       id: "62c479c2-8d0b-11e9-bc42-526af7764f64",
      //       ddd: 83,
      //       numero: "32356050",
      //       whatsapp: false,
      //       observacao: "trabalho fds"
      //     }
      //   ],
      //   endereco: [
      //     {
      //       id: "0916dbac-8d2b-11e9-bc42-526af7764f64",
      //       rua: "Rua Maria Eulina",
      //       bairro: "Popular",
      //       complemento: null,
      //       numero: "110"
      //     },
      //     {
      //       id: "0916cc7a-8d2b-11e9-bc42-526af7764f64",
      //       rua: "Rua Estudante Júlio Cezar Soares da Silva",
      //       bairro: "Valentina de Figueiredo",
      //       complemento: null,
      //       numero: "287"
      //     }
      //   ],
      //   nome: "Sarah Evelyn Silva",
      //   dataNascimento: null,
      //   cpf: "23234054703",
      //   instagram: "sara_es",
      //   facebook: null,
      //   email: null,
      //   dataCadastro: null
      // }
    };
  },
  methods: {
    selecionarCliente() {
      facade.cliente.set(this.cliente)
      facade.dialogos.setDialogAdicionarCliente(false)
    }
  }
};
</script>

