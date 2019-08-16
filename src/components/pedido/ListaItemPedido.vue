<template>
  <v-data-table :header="cabecalhos" :items="itens" single-select="false">
    <template #items="props">
      <td>
        Pizza {{props.item.pizza.tamanho.nome}} -
        <span
          v-for="sabor in props.item.pizza.sabores" :key="sabor.id"
        >{{sabor.nome}},</span>
      </td>

      <td class="justify-left layout">
        <v-icon small class="mr-2" @click="deleteItem(props.item)">delete_forever</v-icon>
      </td>
    </template>
  </v-data-table>
</template>

<script>
import { ItemPedido } from "./Modelos.js";

export default {
  name: "lista-item-pedido",
  computed: {
    itens: {
      get() {
        return this.$store.getters.getItensPedido;
      },
      set(novo) {
        this.$store.commit("guardarItemPedido", novo);
      }
    },
    sabores(ores) {
      console.log(ores);
      let saboresStr = "";
      ores.foreach(s => {
        saboresStr += s.nome;
      });
      return saboresStr;
    }
  },
  data: () => ({
    cabecalhos: [
      {
        text: "Preço",
        value: "preco"
      },
      {
        text: "Tamanho",
        value: "pizza.tamanho.nome"
      }
    ]
  }),
  methods: {
    deleteItem(item) {
      let pos = this.itens.indexOf(item);
      this.itens.splice(pos, pos + 1);
    }
  }
};
</script>
