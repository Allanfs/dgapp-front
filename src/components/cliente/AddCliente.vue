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
                <v-text-field v-model="cliente.telefone.ddd" type="number" label="DDD" required></v-text-field>
              </v-flex>
              <v-flex xs12 sm5 md3>
                <v-text-field v-model="cliente.telefone.numero" label="Número*" mask="#####-####" required></v-text-field>
              </v-flex>
              <v-flex xs12 sm5 md4>
                <v-text-field v-model="cliente.telefone.observacao" label="Observação"></v-text-field>
              </v-flex>
              <v-flex>
                <v-checkbox v-model="cliente.telefone.whatsapp" label="É Whatsapp"></v-checkbox>
              </v-flex>
            </v-layout>
        </v-card>
        <v-card flat>
          <v-layout row wrap>
              <v-flex xs12 sm10 md5>
                <v-text-field v-model="cliente.endereco.rua" label="Rua"></v-text-field>
              </v-flex>
              <v-flex xs12 sm2 md3>
                <v-text-field v-model="cliente.endereco.numero" label="Número"></v-text-field>
              </v-flex>
              <v-flex xs12 sm3 md4>
                <v-text-field v-model="cliente.endereco.bairro" label="Bairro" value></v-text-field>
              </v-flex>
              <v-flex xs12 sm5 md12>
                <v-text-field v-model="cliente.endereco.complemento" label="Complemento"></v-text-field>
              </v-flex>
            </v-layout>
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
import { HENDERECO, HTELEFONE } from "../utils/cabecalhosTabelas.js";

export default {
  name: "add-cliente",
  props: {
    titulo: String
  },
  computed: {
    tituloFormulario() {
      return this.titulo ? this.titulo : 'Cadastrar Cliente';
    }
  },
  data() {
    return {
      cliente: {
        telefone: {},
        endereco: {}
      }
    };
  },
  methods: {
    save() {
      this.cliente.telefone = [this.cliente.telefone];
      this.cliente.endereco = [this.cliente.endereco];
      console.log(this.cliente)
      this.$store.dispatch("cliente/salvar", this.cliente);
      this.cliente = {
        telefone: {},
        endereco: {}
      };
    }
  }
};
</script>

