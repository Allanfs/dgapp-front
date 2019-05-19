<template>
  <div>
    <v-container>
      <v-card>
        <v-card-title>
          <h2>Listar Tamanhos</h2>
        </v-card-title>

        <v-card-text>
           <crud-table
            :headers="cabecalho"
            titulo="Tamanhos"
            componente="tamanho"
            :propItens="listaTamanhos"
            editavel
            deletavel
          ></crud-table>
          </crud-table>
        </v-card-text>
      </v-card>
    </v-container>
  </div>
</template>

<script>
import CrudTable from "../utils/CrudTable.vue";
import { TAMANHOVR } from "@/store/vuexroutes/tamanho.vr.js";
import { HTAMANHO } from "../utils/cabecalhosTabelas.js";

export default {
  name: "lista-tamanho",
  data() {
    return {};
  },
  created() {
    this.cabecalho = HTAMANHO
    this.$store.dispatch(`tamanho/${TAMANHOVR.action.listar}`)
  },
  computed: {
    listaTamanhos() {
      return this.$store.getters[`tamanho/${TAMANHOVR.getters.listaTamanhos}`]
    }
  },
  components: {
    "crud-table": CrudTable,
  }
};
</script>

<style>
</style>
