<template>
  <div>
    <info-pedido/>
    <info-cliente/>
    <bloco-itens-pedido/>

    <v-card>
        <info-pagamento/>
      <v-card-actions>
        <v-layout row>
          <v-btn color="primary" @click="salvar">
            Cadastrar <v-icon right dark>done</v-icon>
          </v-btn>
          <v-spacer></v-spacer>
          <v-btn color="error">
            Cancelar <v-icon right dark>delete</v-icon>
          </v-btn>
        </v-layout>
      </v-card-actions>
    </v-card>
  </div>
</template>

<script>
import { Pedido, ItemPedido, Produto } from "./Modelos";
import facade from "../../facade"
import InfoPedidoVue from './cadastroPedido/InfoPedido.vue';
import InfoClienteVue from './cadastroPedido/InfoCliente.vue';
import BlocoItensPedidoVue from './cadastroPedido/BlocoItensPedido.vue';
import InfoPagamentoVue from './cadastroPedido/InfoPagamento.vue';

export default {
  name: "The-Pedido",
  components: {
    "info-pedido": InfoPedidoVue,
    "info-cliente": InfoClienteVue,
    "bloco-itens-pedido": BlocoItensPedidoVue,
    "info-pagamento": InfoPagamentoVue,
  },
  data: () => ({
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
  }),
  computed: {
    valorTotal() {
      let valor = 0
      this.itensPedido.forEach( item => {
        valor += parseFloat(item.valor * item.quantidade)
      })
      
      return parseFloat(valor - this.valorDesconto)
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
    }
  },
  methods: {
    salvar() {

      let pedido = new Pedido(
        this.cliente,
        this.itensPedido,
        this.cliente.endereco[0]
      );

      facade.pedido.cadastrar(pedido)
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
