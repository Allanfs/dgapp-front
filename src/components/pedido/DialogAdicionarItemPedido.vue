<template>
  <div>
    <v-dialog v-model="dialogSelecionarItem" width="400">
      <template v-slot:activator="{ on }">
        <v-btn color="green" dark v-on="on">
          <v-icon left>add</v-icon>Adicionar
        </v-btn>
      </template>

      <v-card>
        <v-card-title class="headline grey lighten-2" primary-title>Selecione um item</v-card-title>

        <v-card-text>
          <v-dialog
            v-model="dialogAddPizza"
            fullscreen
            hide-overlay
            transition="dialog-bottom-transition"
            scrollable>
            <template v-slot:activator="{ on }">
              <v-btn block @click="listarPara('Pizza')" color="primary" v-on="on">Pizza</v-btn>
            </template>
            <v-card>
              <v-toolbar color="primary">
                <v-toolbar-title>Adicionar Pizza</v-toolbar-title>
                <v-spacer />
                <v-toolbar-items>
                  <v-btn dark flat @click="adicionar" :disabled="desabilitado">Adicionar</v-btn>
                </v-toolbar-items>
              </v-toolbar>
              <v-card-text>
                <tamanhos v-model="tamanho" />
                <sabores v-model="saboresSelecionados" />
              </v-card-text>
            </v-card>
          </v-dialog>
        </v-card-text>
        <v-card-text>
          <v-dialog
            v-model="dialogAddProduto"
            fullscreen
            hide-overlay
            transition="dialog-bottom-transition"
            scrollable>
            <template v-slot:activator="{ on }">
              <v-btn block @click="listarPara('Produto')" color="primary" v-on="on">Produto</v-btn>
            </template>
            <v-card>
              <v-toolbar color="primary">
                <v-toolbar-title>Adicionar Produto</v-toolbar-title>
                <v-spacer />
                <v-toolbar-items>
                  <v-btn dark flat>Adicionar</v-btn>
                </v-toolbar-items>
              </v-toolbar>
              <v-card-text>
                <listar-produtos></listar-produtos>
              </v-card-text>
            </v-card>
          </v-dialog> 
        </v-card-text>

        <v-divider></v-divider>

        <v-card-actions>
          <div class="flex-grow-1"></div>
          <v-btn color="error" text @click="dialogSelecionarItem = false">Sair</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import ListaProdutosVue from "./ListaProdutos.vue";
import ListaTamanhosVue from "./ListaTamanhos.vue";
import ListaSaboresVue from "./ListaSabores.vue";
import { ItemPedido } from "./Modelos";
import facade from "../../facade"

export default {
  name: "dialog-adicionar-item-pedido",
  components: {
    "listar-produtos": ListaProdutosVue,
    tamanhos: ListaTamanhosVue,
    sabores: ListaSaboresVue
  },
  computed: {
    desabilitado() {
      let tamanhoEhNull = () => {
        return this.tamanho === null;
      };
      let peloMenosUmSaborSelecionado = () => {
        return this.saboresSelecionados.length >= 1;
      };
      let quantidadeSaboresSelecionadosEhValido = () => {
        let qtd = this.saboresSelecionados.length;
        return qtd > 0 && qtd <= this.tamanho.numeroMaximoSabores;
      };

      if (
        tamanhoEhNull() ||
        !peloMenosUmSaborSelecionado() ||
        !quantidadeSaboresSelecionadosEhValido()
      ) {
        return true;
      }
      return false;
    },
    dialogSelecionarItem: {
      get() {
        return this.$store.getters.dialogSelecionarItem;
      },
      set(novoBool) {
        if (novoBool) {
          // verificar no state se já foi settado
          // os tamanhos, sabores, e produtos
          // se sim: continue
          // se não: faça um action para busca-los
        }
        this.$store.commit("dialogSelecionarItem", novoBool);
      }
    },
    dialogAddProduto: {
      get() {
        this.$store.getters.dialogAddProduto;
      },
      set(novoBool) {
        this.$store.commit("dialogAddProduto", novoBool);
      }
    },
    dialogAddPizza: {
      get() {
        return this.$store.getters.dialogAddPizza;
      },
      set(novoBool) {
        this.$store.commit("dialogAddPizza", novoBool);
      }
    }
  },
  data: () => ({
    sabores: [],
    saboresSelecionados: [],
    tamanho: {},
    produtoPizza: {
      id: "35990c12-c08f-11e9-9cb5-2a2ae2dbcce4",
      nome: "Pizza",
      preco: 0,
      pizza: true
    }
  }),
  methods: {
    listarPara(tipo) {
      switch (tipo) {
        case "Produto":
          this.dialogAddProduto = true;
          // this.dialogSelecionarItem = false; // por algum motivo se este comando for feito, não funciona corretamente
          break;

        case "Pizza":
        case "pizza":
          this.$store.commit("dialogAddPizza", true);
          // this.dialogSelecionarItem = false;
          break;

        default:
          break;
      }
    },
    adicionar() {
      this.dialogAddPizza = false;

      let sabores = [];

      for (let index = 0; index < this.saboresSelecionados.length; index++) {
        const saborSelecionado = this.saboresSelecionados[index];
        sabores.push(saborSelecionado);
      }

      facade.pedido.adicionarItemPedido({
        produto: this.produtoPizza,
        quantidade: 1,
        tamanho: this.tamanho,
        sabores: sabores
      })

      this.saboresSelecionados = [];
      this.$store.commit("guardarTamanho", null);
    }
  }
};
</script>
