<template>
  <div>
    <v-form>
      <v-container>
        <v-layout row wrap>
          <v-radio-group v-model="radios" :mandatory="false" row>
            <v-radio label="CPF" value="cpf"></v-radio>
            <v-radio label="Telefone" value="telefone"></v-radio>
          </v-radio-group>
          <v-flex xs12>
            <v-text-field
              v-model="dado"
              append-icon="search"
              box
              :label="obterLabel"
              type="text"
              :mask="obterMascara()"
              @click:append="consultar"
            ></v-text-field>
          </v-flex>
        </v-layout>
      </v-container>
    </v-form>

    <buscar-cliente
      v-show="clienteEncontrado"
      :cliente="this.cliente" 
      titulo="Cliente encontrado"  
    />
    <!-- 
      TODO adicionar prop 'cliente' ao componente
      TODO adicionar prop 'titulo' ao componente,
        definir 'Cadastrar Cliente' por padrão
    -->
  </div>
</template>

<script>
import clienteDao from "@/store/api/services/cliente.js";
import BuscarClienteCadastrado from "./BuscarClienteCadastrado.vue";

export default {
  name: "consultar-cliente",
  components: {
    "buscar-cliente": BuscarClienteCadastrado
  },
  data: () => ({
    dado: "",
    radios: "telefone",
    cliente: null
  }),

  computed: {
    obterLabel() {
      if (this.radios === "cpf") {
        return "Buscar por CPF";
      }
      if (this.radios === "telefone") {
        return "Buscar por número de telefone";
      }
    },
    clienteEncontrado() {
      return this.cliente !== null;
    }
  },

  methods: {
    obterMascara() {
      if (this.radios === "cpf") {
        return "###.###.###-##";
      }
      if (this.radios === "telefone") {
        return "#####-####";
      }
    },
    consultar() {
      this.clienteDao
        .buscarUm({
          parametro: this.radios,
          valor: this.dado
        })
        .then(({ data }) => {
          this.cliente = data;
          // sinalizar para exibir dado do cliente
          // exibir form de cliente com os dados preenchidos
          // e exibir um botão para Criar pedido
        })
        .catch(error => {
          console.log(erorr);
        });
    }
  }
};
</script>
