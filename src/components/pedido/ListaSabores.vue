<template>
  <v-list two-line subheader>
    <v-list-group>
      <template v-slot:activator>
        <v-subheader>Sabores</v-subheader>
      </template>
      <v-list-tile v-for="sabor in saboresDisponiveis" :key="sabor.id">
        <v-list-tile-action>
          <v-checkbox :value="sabor" v-model="sabores"></v-checkbox>
          <!-- selecionar o checkbox deve ser unico -->
        </v-list-tile-action>
        <v-list-tile-content>
          <v-list-tile-title>{{sabor.nome}}</v-list-tile-title>
          <v-list-tile-sub-title>{{subtitulo(sabor.recheios)}}</v-list-tile-sub-title>
        </v-list-tile-content>
      </v-list-tile>
    </v-list-group>
  </v-list>
</template>


<script>
import saborDao from "../../store/api/services/sabor.js";
import { http } from '../../store/api/config'

import facade from '../../facade';
export default {
  name: "lista-sabores",
  props: {
    /**
     * Quantidade máxima de recheios
     * que podem ser selecionados
     */
    quantidadeMax: Number
  },
  computed: {
    sabores: {
      get(){
        let a = facade.itemPedido.getSabores()
        return a
      },
      set(s) {
        facade.itemPedido.setSabores(s)
      }
    }
  },
  data: () => ({
    exibirRecheio: true,
    saboresDisponiveis: []
  }),
  async mounted() {
    // let host = `https://domgilittusapi.herokuapp.com/sabores`
    // http.get(host).then(({ data }) => (this.saboresDisponiveis = data))
    await saborDao.listarTodos().then(({ data }) => {
      (this.saboresDisponiveis = data)
    });
    
  },
  methods: {
    subtitulo(recheios) {
      const listaRecheio = recheios;
      let recheiosPedido = "";
      // listaRecheio.sort((um, outro) => {
      //   return um.posicao > outro.posicao ? 1 : -1;
      // });
      // organiza os sabores separando por virgula e pondo um ponto final
      for (let i = 0; i < listaRecheio.length; i++) {
        const recheio = listaRecheio[i];
        recheiosPedido += recheio.nome;

        i + 1 === listaRecheio.length
          ? (recheiosPedido += ".")
          : (recheiosPedido += ", ");
      }
      return recheiosPedido;
    },
    frazeNoPlural(valor, singular, plural) {
      return valor === 1 ? `${valor} ${singular}` : `${valor} ${plural}`;
    }
  }
};
</script>

