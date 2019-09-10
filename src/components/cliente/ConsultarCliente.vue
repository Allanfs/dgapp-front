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
              @keydown.enter.prevent='consultar'
              @click:append="consultar"
            ></v-text-field>
          </v-flex>
        </v-layout>
      </v-container>
    </v-form>

    <div v-if="clienteEncontrado != null">
          <!-- v-show="clienteEncontrado" -->
        <buscar-cliente
          :cliente="this.cliente" 
          titulo="Cliente encontrado"  
        />
    </div>
    <div v-else>
      <cadastrar-cliente/>
    </div>
</div>
</template>

<script>
import clienteDao from "@/store/api/services/cliente.js";
import BuscarClienteCadastrado from "./BuscarClienteCadastrado.vue";
import AddClienteVue from '../cliente/AddCliente.vue';
import facade from '../../facade';

export default {
  name: "consultar-cliente",
  components: {
    "buscar-cliente": BuscarClienteCadastrado,
    "cadastrar-cliente": AddClienteVue
  },
  data: () => ({
    clienteDao,
    dado: "",
    radios: "telefone",
    cliente: null
  }),

  computed: {
    // cliente() {
    // return this.$store.getters.getCliente
    // },
    obterLabel() {
      if (this.radios === "cpf") {
        return "Buscar por CPF";
      }
      if (this.radios === "telefone") {
        return "Buscar por número de telefone";
      }
    },
    clienteEncontrado: {
      get() {
        return facade.cliente.get();
      },
      set(novo) {
        facade.cliente.set(novo);
      }
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
      this.clienteDao.findBy({tipo: this.radios, dado: this.dado}).then( (r) => {
        if (r.status === 204 ) {
          this.clienteEncontrado = r.data
          return
        } else {
          this.cliente = data;
        }
      }).catch(error => {
        this.clienteEncontrado = undefined
          console.log(error);
        });
    }
  }
};
</script>
