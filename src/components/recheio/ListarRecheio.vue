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
            deletavel>
            <template v-slot:formAdd>
              <v-dialog v-if="dialogo" v-model="dialogo" max-width="60%">
                <recheio @cancelar="cancelar"></recheio>
              </v-dialog>
            </template>
          </crud-table>
        </v-card-text>
      </v-card>
    </v-container>

  </div>
</template>

<script>
import recheioDao from "@/store/api/services/recheio.js";

import CrudTable from "../utils/CrudTable.vue";
import { RECHEIOVR } from "@/store/vuexroutes/recheio.vr.js";
import { HRECHEIO } from "../utils/cabecalhosTabelas.js";
export default {
  name: "lista-recheio",
  data() {
    return {
    }
  },
  created() {
    this.cabecalho = HRECHEIO;
    this.$store.dispatch(RECHEIOVR.getAction('listar'))
  },
  methods: {
    cancelar () {
      this.$store.commit(RECHEIOVR.getMutation('toggleDialog'))
    }
  },
  computed: {
    listaRecheios() {
      return this.$store.getters[RECHEIOVR.getGetter('listaRecheios')]
    },
    dialogo: {
      get() {
        return this.$store.getters[RECHEIOVR.getGetter('dialog')]
      },
      set() {
        this.$store.commit(RECHEIOVR.getMutation('toggleDialog'))
      }
    }
  },
  components: {
    "crud-table": CrudTable,
    "recheio": () => import("@/components/recheio/AddRecheio.vue")
  }
};
</script>