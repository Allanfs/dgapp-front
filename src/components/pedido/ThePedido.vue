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
  }),
  methods: {
    salvar() {

      let pedido = facade.pedido.getPedido()
      // console.log(JSON.stringify(pedido));

      facade.pedido.cadastrar(pedido)
        .then(({ data }) => {
          facade.pedido.setPedido(data)
          console.log(data);
        })
        .catch(err => console.log(err));
    },
    adicionarTamanho(tamanho) {
      this.$store.commit("guardarTamanho", tamanho);
    }
  }
};
</script>
