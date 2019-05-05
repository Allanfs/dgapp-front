<template>
  <div>
    <v-container>
      <v-card>
        <v-card-title>
          <h2>Listar Tamanhos</h2>
        </v-card-title>

        <v-card-text>
          <crud-table titulo="Recheio" :headers="cabecalho" :propItens="[{}]">
            <template v-slot:formAdd>
              <telefone></telefone>
            </template>
          </crud-table>
        </v-card-text>
      </v-card>
    </v-container>
  </div>
</template>

<script>
import CrudTable from "../utils/CrudTable.vue";
import { HTAMANHO } from "../utils/cabecalhosTabelas.js";
export default {
  name: "lista-tamanho",
  data() {
    return {};
  },
  created() {
    this.cabecalho = HTAMANHO
  },
  components: {
    "crud-table": CrudTable,
  }
};
</script>

<style>
</style>
