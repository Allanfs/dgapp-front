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
          >
            <template v-slot:formAdd>
              <v-dialog  v-if="dialogo" v-model="dialogo" max-width="60%">
                <tamanho @cancelar="cancelar"></tamanho>
              </v-dialog>
            </template>
          </crud-table>
        </v-card-text>
      </v-card>
    </v-container>
  </div>
</template>

<script>
import CrudTable from "../utils/CrudTable.vue";
// import AddTamanho from "@/components/tamanho/AddTamanho.vue"
import { TAMANHOVR } from "@/store/vuexroutes/tamanho.vr.js";
import { HTAMANHO } from "../utils/cabecalhosTabelas.js";

export default {
  name: "lista-tamanho",
  data() {
    return {};
  },
  created() {
    this.cabecalho = HTAMANHO
    this.$store.dispatch(`tamanho/${TAMANHOVR.actions.listar}`)
  },
  methods: {
    cancelar () {
      this.$store.commit(`tamanho/${TAMANHOVR.mutations.toggleDialog}`)
    }
  },
  computed: {
    listaTamanhos() {
      return this.$store.getters[`tamanho/${TAMANHOVR.getters.listaTamanhos}`]
    },
    dialogo: {
      get() {
        return this.$store.getters[`tamanho/${TAMANHOVR.getters.dialog}`]
      },
      set() {
        this.$store.commit(`tamanho/${TAMANHOVR.mutations.toggleDialog}`)
      }
    }
  },
  components: {
    "crud-table": CrudTable,
    "tamanho": () => import("@/components/tamanho/AddTamanho.vue")
  }
};
</script>

<style>
</style>
