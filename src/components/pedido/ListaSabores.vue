<template>
  <v-layout>
    <v-flex >
    <v-checkbox label="Exibir recheios" v-model="exibirRecheio"></v-checkbox>
      <v-card>
        <v-container v-bind="{ [`grid-list-md`]: true }" fluid>
          <v-layout wrap>
            <v-flex
              v-for="n in saboresDisponiveis"
              :key="n.id"
              xs4
            >
              <v-card flat tile>
                <v-checkbox v-model="sabores" :label="n.nome" :value="n" :disabled="!n.ehDisponivel"/>
                <span v-if="exibirRecheio">{{subtitulo(n)}}</span>
              </v-card>
            </v-flex>
          </v-layout>
        </v-container>
      </v-card>
    </v-flex>
  </v-layout>
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
    rowsPerPageItems: [10, 20, 40, 80],
    pagination: {
      rowsPerPage: 10
    },
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

