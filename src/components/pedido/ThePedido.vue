<template>
  <div>
    <v-card id="card-pedido">
      <v-card-title>
        <h3>Pedido</h3>
        <v-chip>Aberto</v-chip>
      </v-card-title>
      <v-card-text>
        <h4>Hora de Abertura:</h4>17:00
      </v-card-text>
    </v-card>
    <v-card id="card-cliente">
      <v-card-title>
        <h3>Cliente</h3>
      </v-card-title>
      <v-card-text>
        <v-layout wrap grid-list-md>
          <v-flex>Nome: {{cliente.nome}}</v-flex>
          <v-flex>Telefone:{{cliente.telefone[0].numero}}</v-flex>
          <v-flex>Endereço:{{cliente.endereco[0].rua}}</v-flex>
          <v-flex>Complemento: {{cliente.endereco[0].complemento}}</v-flex>
        </v-layout>
      </v-card-text>
    </v-card>
    <v-card id="card-itens">
      <v-card-title>
        <h3>Itens</h3>
        <dialog-add-item-pedido id="adicionar-item-pedido" />
      </v-card-title>
      <v-card-text id="card-itens-itens">
        <itens-pedido v-bind:itens="itensPedido"/>
      </v-card-text>
      <v-card-text>
        <v-layout row>
          <v-flex md4>
            <v-text-field label="Total" :value="valorTotal" readonly id="total-pedido"></v-text-field>
          </v-flex>
          <v-flex md4>
            <v-select
              v-model="formaPagamento.tipo"
              :items="['Cartão', 'Dinheiro']"
              label="Forma de Pagamento"
            ></v-select>
          </v-flex>
          <v-flex md2 v-if="formaPagamento.tipo === 'Dinheiro'">
            <v-text-field
              label="Pago com"
              type="number"
              id="tipo-pagamento-pedido"
              v-model="formaPagamento.valorPago"
            ></v-text-field>
          </v-flex>
          <v-flex md2 v-if="formaPagamento.tipo === 'Dinheiro'">
            <v-text-field
              label="Troco"
              type="text"
              readonly
              :value="valorTroco"
              id="troco-pagamento-pedido"
            ></v-text-field>
          </v-flex>

          <v-flex v-else>
            <v-text-field label="Bandeira" type="text" v-model="formaPagamento.bandeira"></v-text-field>
          </v-flex>
        </v-layout>
      </v-card-text>
      <v-card-actions>
        <v-layout row>
          <v-btn color="primary">
            Cadastrar
            <v-icon right dark>done</v-icon>
          </v-btn>
          <v-btn>
            Voltar
            <v-icon right dark>highlight_off</v-icon>
          </v-btn>
          <v-spacer></v-spacer>
          <v-btn color="error">
            Cancelar
            <v-icon right dark>delete</v-icon>
          </v-btn>
        </v-layout>
      </v-card-actions>
    </v-card>
  </div>
</template>

<script>
import pedidoDao from "../../store/api/services/pedido.js";
import { Pedido, ItemPedido, Produto } from "./Modelos";
import DialogAdicionarItemPedidoVue from "./DialogAdicionarItemPedido.vue";
import ListaItemPedidoVue from './ListaItemPedido.vue';

export default {
  name: "The-Pedido",
  components: {
    "itens-pedido": ListaItemPedidoVue,
    "dialog-add-item-pedido": DialogAdicionarItemPedidoVue
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
    },
    itens: [
      new ItemPedido(
        null,
        new Produto(null, "Pizza", true, 10),
        3,
        null,
        null,
        null
      ),
      new ItemPedido(
        null,
        new Produto(null, "Pizza", true, 10),
        1,
        null,
        null,
        null
      )
    ],
    // valorTotal: (35.5).toFixed(2),
    formaPagamento: {
      valorPago: (50.1).toFixed(2),
      troco: 0,
      bandeira: "",
      tipo: ""
    }
  }),
  computed: {
    valorTotal() {
      let valor = 0
      this.itensPedido.forEach( item => {
        console.log(item, typeof(item))
        valor += parseFloat(item.valor * item.quantidade)
      })
      
      return valor.toFixed(2)
    },
    valorTroco() {
      return (this.formaPagamento.valorPago - this.valorTotal).toFixed(2);
    },
    nomesSabores() {
      let nomes = "";
      this.sabores.forEach(function(sabor) {
        nomes += sabor.nome;
        nomes += ", ";
      });
      return nomes.substr(0, nomes.length - 2);
    },
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
    // if (clienteBuscado) {
    //   this.cliente = clienteBuscado;
    // } else {
    //   // deve haver um cliente
    // }
  },
  methods: {
    salvar() {
      let pedido = new Pedido(
        this.cliente,
        this.itensPedido,
        this.cliente.endereco[0]
      );
      pedidoDao
        .cadastrar(pedido)
        .then(({ data }) => {
          console.log(data);
        })
        .catch(err => console.log(err));
      // this.$store.commit('guardarCliente', {}); // esvazia o cliente no vuex, para não ser usado indevidamente.
    },
    adicionarTamanho(tamanho) {
      this.$store.commit("guardarTamanho", tamanho);
    }
  }
};
</script>
