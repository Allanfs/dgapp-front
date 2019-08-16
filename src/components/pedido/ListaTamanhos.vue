<template>
  <v-list two-line subheader>
    <v-subheader :class="tamanho ? 'green' : 'white'">Tamanhos</v-subheader>
    <v-list-group>
      <v-radio-group v-model="tamanho">
        <v-list-tile v-for="tamanhoIt in tamanhos" :key="tamanhoIt.id">
          <v-list-tile-action>
            <v-radio :value="tamanhoIt" @change="$emit('input', tamanhoIt)"></v-radio>
            <!-- selecionar o checkbox deve ser unico -->
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>{{tamanhoIt.nome}}</v-list-tile-title>
            <v-list-tile-sub-title v-text="subtituloTamanho(tamanhoIt)"></v-list-tile-sub-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-radio-group>
    </v-list-group>
  </v-list>
</template>

<script>
import tamanhoDao from "../../store/api/services/tamanho.js";
export default {
  name: "lista-tamanhos",
  data: () => ({
    tamanhos: [],
    tamanho: {}
  }),
  mounted() {
    // obter tamanhos cadastrados.
    tamanhoDao.listarTodos().then(({ data }) => (this.tamanhos = data));
  },
  methods: {
    subtituloTamanho({ numeroFatias, numeroMaximoSabores, precoPadrao }) {
      return `${this.frazeNoPlural(
        numeroFatias,
        "fatia",
        "fatias"
      )} - Até ${this.frazeNoPlural(
        numeroMaximoSabores,
        "sabor",
        "sabores"
      )} - A partir de R$ ${precoPadrao}`;
    },
    frazeNoPlural(valor, singular, plural) {
      return valor === 1 ? `${valor} ${singular}` : `${valor} ${plural}`;
    }
  }
};
</script>

