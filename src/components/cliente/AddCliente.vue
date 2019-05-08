<template>

      <v-card disabled>
        <v-card-title>
          <h2>Cadastrar Cliente</h2>
        </v-card-title>

        <v-card-text>
          <v-form>
            <v-layout>
              <v-flex xs12 sm6>
                <v-text-field  v-model="cliente.nome" label="Nome"></v-text-field>
              </v-flex>
              <!-- <v-spacer></v-spacer> -->
              <v-flex xs12 sm2>
                <v-text-field
                  v-model="cliente.cpf"
                  label="CPF"
                  mask="###.###.###-##"
                ></v-text-field>
              </v-flex>
              <!-- <v-spacer></v-spacer> -->
              <v-flex xs12 sm2>
                <v-text-field
                  v-model="cliente.nascimento"
                  type="date"
                  label="Data Nascimento"
                ></v-text-field>
              </v-flex>
            </v-layout>

            <!-- redes sociais -->
            <v-layout row wrap>
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
            </v-layout>

            <v-card>
              <!-- aqui será inserido os telefones que este cliente possui cadastrado -->
              <crud-table titulo="Telefone" :headers="cabecalhoTelefone" :propItens="[{}]">
                <template v-slot:formAdd>
                  <telefone></telefone>
                </template>
              </crud-table>
            </v-card>

            <v-card>
              <!-- aqui será inserido os endereços que este cliente possui cadastrado -->
              <crud-table titulo="Endereço" :headers="cabecalhoEndereco" :propItens="[{}]"></crud-table>
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

// import FormCliente from "./FormCliente.vue";
import CrudTable from "../utils/CrudTable.vue";
import FormEnderecoVue from "../endereco/FormEnderecoPopup.vue";
import FormTelefoneVue from "../telefone/FormTelefonePopup.vue";

import { REMOVER_ALERTA } from "@/store/modules/mutations";
import { HENDERECO, HTELEFONE } from "../utils/cabecalhosTabelas.js";

export default {
  name: "add-cliente",
  created() {
    this.cabecalhoEndereco = HENDERECO;
    this.cabecalhoTelefone = HTELEFONE;

    // obter valores cadastrados deste cliente
    // se for cliente novo(não posssui id), então não busca nada
  },
  components: {
    "crud-table": CrudTable,
    endereco: FormEnderecoVue,
    telefone: FormTelefoneVue
  },
  data() {
    return {
      cliente: {
        telefones: [],
        enderecos: []
      },
    };
  },
  methods: {
    save() {
      this.$store.dispatch("cliente/salvar", this.cliente);
      this.cliente = {};
    }
  }
};
</script>

