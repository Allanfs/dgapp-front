<template>
  <v-card disabled>
    <v-card-title>
      <v-toolbar color="primary" dark flat>
        <v-toolbar-title>{{titulo}} Categoria</v-toolbar-title>
      </v-toolbar>
    </v-card-title>

    <v-card-text>
      <v-form class="px-3">
        <v-text-field v-model="categoria.nome" label="Nome"></v-text-field>
      </v-form>
    </v-card-text>

    <v-card-actions class="pb-3 pl-3">
      <v-btn class="success" block @click="save">Salvar</v-btn>
      <v-btn class="error" block>Cancelar</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
import { REMOVER_ALERTA } from "@/store/modules/mutations";
import titulo from "@/mixins/tituloFormulario"

export default {
  name: 'add-categoria',
  data() {
    return {
      edicao: false,
      categoria: {}
    };
  },
  methods: {
    save() {
      this.$store.dispatch("categoria/salvar", this.categoria);
      this.categoria = {};
    }
  },
  mixins: [titulo]
};
</script>

