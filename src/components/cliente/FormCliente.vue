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

    <v-layout row wrap>
      <v-flex xs12 sm2>
        <v-text-field v-model="cliente.instagram" label="Instagram" prefix="@"></v-text-field>
      </v-flex>
      <v-flex xs12 sm2>
        <v-text-field v-model="cliente.facebook" label="Facebook" prefix="/"></v-text-field>
      </v-flex>
    </v-layout>

    <v-card>
      <v-container fluid class="my-5">
        <!-- botão para adicionar -->
        <v-card flat class="pa-3">
          <v-layout>
            <v-flex>
              <telefone @inputTelefone="adicionar"/>
            </v-flex>
          </v-layout>
        </v-card>

        <!-- listagem de telefone-->
        <v-card flat class="pa-3" v-for="(telefone, idc) in cliente.telefones" :key="idc">
          <v-layout row wrap @click="click">
            <v-flex xs12 md2>
              <div class="caption grey--text">Número</div>
              <div>{{telefone.numero}}</div>
            </v-flex>

            <v-flex xs6 sm4 md2>
              <div class="caption grey--text">É whatsapp</div>
              <div>{{telefone.whatsapp}}</div>
            </v-flex>
          </v-layout>
          <v-divider></v-divider>
        </v-card>
      </v-container>
    </v-card>

    <v-card>
      <v-container fluid class="my-5">
        <!-- botão para adicionar -->
        <v-card flat class="pa-3">
          <v-layout>
            <v-flex>
              <endereco @inputEndereco="adicionar"/>
            </v-flex>
          </v-layout>
        </v-card>

        <!-- listagem de endereço-->
        <v-card flat class="pa-3" v-for="(endereco, idc) in cliente.enderecos" :key="idc">
          <v-layout row wrap @click="click">
            <v-flex xs12 md6>
              <div class="caption grey--text">Endereço</div>
              <div>{{endereco.logradouro}}, {{endereco.numero}}</div>
            </v-flex>
            <v-flex xs6 sm4 md2>
              <div class="caption grey--text">Complemento</div>
              <div>{{endereco.complemento}}</div>
            </v-flex>
            <v-flex xs6 sm4 md2>
              <div class="caption grey--text">Bairro</div>
              <div>{{endereco.bairro}}</div>
            </v-flex>
          </v-layout>
          <v-divider></v-divider>
        </v-card>
      </v-container>
    </v-card>
  </v-form>
</template>
<script>
import ListarEAdicionarDadoVue from "../utils/ListarEAdicionarDado.vue";
import FormEnderecoVue from "../endereco/FormEnderecoPopup.vue";
import FormTelefoneVue from "../telefone/FormTelefonePopup.vue";

export default {
  name: "form-cliente",
  components: {
    "listar-add": ListarEAdicionarDadoVue,
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
