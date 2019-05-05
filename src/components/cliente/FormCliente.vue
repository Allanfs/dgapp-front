<template>
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
        <v-text-field v-model="cliente.nascimento" type="date" label="Data Nascimento"></v-text-field>
      </v-flex>
    </v-layout>

    <!-- redes sociais -->
    <v-layout row wrap>
      <v-flex xs12 sm2>
        <v-text-field v-model="cliente.instagram" label="Instagram" prefix="@"></v-text-field>
      </v-flex>
      <v-flex xs12 sm2>
        <v-text-field v-model="cliente.facebook" label="Facebook" prefix="/"></v-text-field>
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
</template>
<script>
import ListarEAdicionarDadoVue from "../utils/ListarEAdicionarDado.vue";
import CrudTable from "../utils/CrudTable.vue";
import FormEnderecoVue from "../endereco/FormEnderecoPopup.vue";
import FormTelefoneVue from "../telefone/FormTelefonePopup.vue";

import { HENDERECO, HTELEFONE } from "../utils/cabecalhosTabelas.js";

export default {
  name: "form-cliente",
  created() {
    this.cabecalhoEndereco = HENDERECO
    this.cabecalhoTelefone = HTELEFONE
  },
  components: {
    "listar-add": ListarEAdicionarDadoVue,
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
      dialog: false
    };
  },
  methods: {
    click() {},
    /**
     * Obj:
     *
     *  nome: nome da propriedade que receberá o valor
     *
     *
     *  payload: valor que será atribuido
     */
    adicionar(obj) {
      this.cliente[obj.nome].push(obj.payload);
    },
    endereco(nome) {
      // aqui ele pode pegar um componente importado
      // ou um componente importado atravez da função:
      //  Vue.component() feita no main.js
      return nome;
    },
    fecharDialog() {
      this.dialog = !dialog;
    }
  },
  computed: {}
};
</script>
