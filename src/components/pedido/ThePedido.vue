<template>
  <div>
    <v-container>
      <v-layout>
        <v-flex>
          <modal-add-pizza></modal-add-pizza>
        </v-flex>
      </v-layout>
    </v-container>

    <v-container fluid>
      <v-layout>
        <v-flex md5>
          <v-card>
            <v-container >
              <v-layout wrap grid-list-md>
                <v-flex>
                  <lista-tamanhos v-model="tamanho" />
                </v-flex>
              </v-layout>
              <v-laytout>
                 <v-flex>
                  <lista-produtos />
                </v-flex>
              </v-laytout>
            </v-container>
          </v-card>
        </v-flex>
        <v-flex md5>
          <v-card  min-width="50%">
            <v-card-title>
              <v-container fluid>
                <v-layout row>
                  <v-flex>
                    Pedido
                  </v-flex>
                  <v-flex>
                    <v-btn :disabled="FINALIZAR" @click="salvar">{{BOTAO_FINALIZAR}}</v-btn>
                  </v-flex>
                </v-layout>
              </v-container>
              <!-- <v-layout>
                  <v-flex></v-flex>
                  <v-flex>
                  </v-flex>
              </v-layout>-->
            </v-card-title>

            <v-card-text>
              <p>Cliente: {{cliente.nome}}</p>
              <p>Telefone: {{cliente.telefone[0].numero}}</p>
              <p>Endereco: {{cliente.endereco[0].rua}}, {{cliente.endereco[0].numero}}</p>

              <v-divider />
              <!-- <v-flex> -->
              <lista-item-pedido></lista-item-pedido>
              <!-- </v-flex> -->
            </v-card-text>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
    <adicionar-produto/>
  </div>
</template>

<script>
import ListaSabores from "./ListaSabores.vue";
import ListaProdutos from "./ListaProdutos.vue";
import ListaTamanhos from "./ListaTamanhos.vue";
import pedidoDao from "../../store/api/services/pedido.js";
import ModalAddPizzaVue from "./ModalAddPizza.vue";
import ListaItemPedido from "./ListaItemPedido.vue";
import { Pedido } from './Modelos';
import AdicionarProdutoVue from './AdicionarProduto.vue';

export default {
  name: "The-Pedido",
  components: {
    "lista-sabores": ListaSabores,
    "lista-produtos": ListaProdutos,
    "lista-tamanhos": ListaTamanhos,
    "modal-add-pizza": ModalAddPizzaVue,
    "lista-item-pedido": ListaItemPedido,
    "adicionar-produto": AdicionarProdutoVue
  },
  computed: {
    nomesSabores() {
      let nomes = "";
      this.sabores.forEach(function(sabor) {
        nomes += sabor.nome;
        nomes += ", ";
      });
      return nomes.substr(0, nomes.length - 2);
    },
    informacaoCliente() {
      return `${this.cliente.telefone[0]} ${this.cliente.en}`;
    }
  },
  data: () => ({
    cliente: {
      id: "b0e833f0-8d06-11e9-bc42-526af7764f64",
      telefone: [
        {
          id: "62c479c2-8d0b-11e9-bc42-526af7764f64",
          ddd: 83,
          numero: "32356050",
          whatsapp: false,
          observacao: "trabalho fds"
        }
      ],
      endereco: [
        {
          id: "0916dbac-8d2b-11e9-bc42-526af7764f64",
          rua: "Rua Maria Eulina",
          bairro: "Popular",
          complemento: null,
          numero: "110"
        },
        {
          id: "0916cc7a-8d2b-11e9-bc42-526af7764f64",
          rua: "Rua Estudante Júlio Cezar Soares da Silva",
          bairro: "Valentina de Figueiredo",
          complemento: null,
          numero: "287"
        }
      ],
      nome: "Sarah Evelyn Silva",
      dataNascimento: null,
      cpf: "23234054703",
      instagram: "sara_es",
      facebook: null,
      email: null,
      dataCadastro: null
    }
  }),
  computed: {
    itensPedido() {
      return this.$store.getters.getItensPedido;
    },
    tamanho: {
      get() {
        return this.$store.getters.getTamanho;
      },
      set(payload) {
        return this.$store.commit("guardarTamanho", payload);
      }
    },
    BOTAO_FINALIZAR() {
      return "Cadastrar";
    },
    FINALIZAR() {
      if (this.itensPedido.length > 0) {
        return false;
      } else {
        return true;
      }
    }
  },
  created() {
    // verifica se existe um cliente setado por outra página;
    // let clienteBuscado = this.$store.getters.getCliente;
    if (clienteBuscado) {
      this.cliente = clienteBuscado;
    } else {
      // deve haver um cliente
    }
  },
  methods: {
    salvar() {
      let pedido = new Pedido(this.cliente, this.itensPedido, this.cliente.endereco[0])
      pedidoDao.cadastrar(pedido).then( ({data}) => {
        console.log(data)
      }).catch( err => console.log(err));
      // this.$store.commit('guardarCliente', {}); // esvazia o cliente no vuex, para não ser usado indevidamente.
    },
    adicionarTamanho(tamanho) {
      this.$store.commit("guardarTamanho", tamanho);
    }
  }
};
</script>
