<template>
  <div>
    <v-container>
      <v-card>
        <v-card-title>
          <h2>Listar Recheios</h2>
        </v-card-title>

        <v-card-text>
          <crud-table
            :headers="cabecalho"
            titulo="Recheios"
            componente="recheio"
            :propItens="listaRecheios"
            editavel
            deletavel
          ></crud-table>
        </v-card-text>
      </v-card>
    </v-container>

  </div>
</template>

<script>
import recheioDao from "@/store/api/services/recheio.js";

import CrudTable from "../utils/CrudTable.vue";
import { HRECHEIO } from "../utils/cabecalhosTabelas.js";
export default {
  name: "lista-recheio",
  data() {
    return {
    }
  },
  created() {
    this.cabecalho = HRECHEIO;
    this.$store.dispatch('recheio/listar')
  },
  computed: {
    listaRecheios() {
      return this.$store.getters['recheio/getListaRecheios']
    }
  },
  components: {
    "crud-table": CrudTable
  }
};
</script>