<template>
  <v-list two-line subheader>
    <v-subheader :class="sabores.length > 0 ? 'green' : 'white'">Sabores</v-subheader>
    <v-list-group>
        <v-list-tile v-for="sabor in saboresDisponiveis" :key="sabor.id">
          <v-list-tile-action>
            <v-checkbox :value="sabor" v-model="sabores" @change="$emit('input', sabores)"></v-checkbox>
            <!-- selecionar o checkbox deve ser unico -->
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>{{sabor.nome}}</v-list-tile-title>
            <v-list-tile-sub-title v-text="subtitulo(sabor)"></v-list-tile-sub-title>
          </v-list-tile-content>
        </v-list-tile>
    </v-list-group>
  </v-list>
</template>


<script>
import saborDao from "../../store/api/services/sabor.js";
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
    quantidadeRecheios() {
      if (this.quantidadeMax)
        return `${this.sabores.length}/${this.quantidadeMax}`;
      else return this.sabores.length;
    }
  },
  data: () => ({
    exibirRecheio: true,
    sabores: [],
    saboresDisponiveis: []
  }),
  mounted() {
    saborDao.listarTodos().then(({ data }) => (this.saboresDisponiveis = data));
  },
  methods: {
    subtitulo(sabor) {
      let listaRecheio = [...sabor.recheios];
      let recheiosPedido = "";

      listaRecheio.sort((um, outro) => {
        return um.posicao > outro.posicao ? 1 : -1;
      });
      // organiza os sabores separando por virgula e pondo um ponto final
      for (let i = 0; i < listaRecheio.length; i++) {
        const recheio = listaRecheio[i];
        recheiosPedido += recheio.recheio.nome;

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

