<template>
  <v-layout justify-center>
    <v-dialog v-model="dialog" max-width="700px">
      <template v-slot:activator="{ on }">
        <v-btn color="primary" v-on="on" :disabled="ativo">Adicionar</v-btn>
      </template>
      <v-card>
        <v-card-title>
          Adicionar Produto
        </v-card-title>
        <v-card-text>
          <v-layout row wrap>
            <v-flex xs4>
              <v-card flat >
                <v-card-text class="px-0" >{{produto.nome}}</v-card-text>
              </v-card>
            </v-flex>
            <v-flex xs5>
              <v-card flat >
                <!-- <v-card-text class="px-0"></v-card-text> -->
                <incrementador v-model="quantidade" :contador="quantidade"/>
              </v-card>
            </v-flex>
            <v-flex xs3>
              <v-card flat>
                <v-card-text class="px-0">{{preco}}</v-card-text>
              </v-card>
            </v-flex>
          </v-layout>
        </v-card-text>
        <v-card-actions>
          <v-btn flat color="orange" @click="cancelar">Cancelar</v-btn>
          <v-btn flat color="green" @click="adicionar">Adicionar</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-layout>
</template>

<script>
import Incrementador from "./Incrementador.vue"
import { ItemPedido } from './Modelos';
export default {
  name: "adicionar-produto",
  components: {
    "incrementador": Incrementador
  },
computed: {
  produto() {
    return this.$store.getters.getProduto
  },
  preco(){
    return this.produto.preco * this.quantidade
  },
  dialog: {
    get() {
      return this.$store.getters.dialogAddProduto
    }, set(novo) {
      this.$store.commit('settarDialogAdicionarProduto', novo)
    }
  }
},
  data: () => ({
    quantidade: 1
  }),
  methods: {
    adicionar() {
      // adicionarItemPedido
      // new ItemPedido(null,this.produto,this.quantidade,null,null,)
      this.$store.commit('guardarItemPedido', {produto:this.produto, quantidade:this.quantidade})
      this.quantidade = 1
      this.dialog = false
    },
    cancelar(){
      this.dialog = false
    }
  }
};
</script>

<style>
</style>