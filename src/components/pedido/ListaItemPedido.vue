<template>
  <v-data-table :headers="headers" :items="itens" class="elevation-1" hide-actions>
    <template v-slot:no-data>
      Nenhum Item Adicionado 
    </template>
    <template v-slot:items="{item}">
      <v-tooltip bottom v-if="item.produto.pizza">
        <template v-slot:activator="{ on }">
          <span>
            <td v-on="on">{{ item.produto.nome }}</td>
          </span>
        </template>
        <h3>{{nomesSaboresTooltip(item.sabores)}}</h3>
      </v-tooltip>
      <td v-else>{{item.produto.nome}}</td>
      <!-- <td>{{ item.quantidade }}</td> -->
      <td class="text-xs-center" v-if="!item.produto.pizza">{{ item.produto.preco }}</td>
      <td class="text-xs-center" v-else>{{ item.valor }}</td>
      <td class="text-xs-center">{{ item.quantidade }}</td>
      <td class="text-xs-center">{{ calcularValor(item.quantidade,item)}}</td>
      <td class="text-xs-center">
        <v-icon small class="mr-2" @click="removerItem(item)">delete</v-icon>
      </td>
    </template>
  </v-data-table>
</template>

<script>
import { ItemPedido } from "./Modelos.js";
import { HeaderItemPedido } from "./headers.js";
import facade from '../../facade';


export default {
  name: "lista-item-pedido",
  computed: {
    itens() {
      return facade.itemPedido.getItens()
    }
  },
  data() {
    return {
      headers: HeaderItemPedido
    }
  },
  methods: {
    calcularValor(quantidade, item){
      if(item.produto.pizza){
        return parseFloat(item.valor * item.quantidade).toFixed(2)
      }else {
        return parseFloat(item.valor * item.quantidade).toFixed(2)
      }
    },
    removerItem(item) {
      let posicao = this.itens.indexOf(item)
      console.log(posicao)
      facade.itemPedido.setItemPedido(this.itens.slice(posicao,1))
    },
    nomesSaboresTooltip(sabores) {
      let nomes = "";
      sabores.forEach(function(sabor) {
        nomes += sabor.nome;
        nomes += ", ";
      });
      return nomes.substr(0, nomes.length - 2);
    }
  }
};
</script>
