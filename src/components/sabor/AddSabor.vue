<template>
  <div>
    <v-container fluid grid-list-md>
      <v-card disabled>
        <v-card-title>
          <h2>Cadastrar Sabor</h2>
        </v-card-title>

        <v-card-text>
          <form-sabor titulo="Sabor"></form-sabor>
        </v-card-text>

        <v-card-actions class="pb-3 pl-3">
          <v-btn class="success" @click="save">Salvar</v-btn>
          <v-btn class="error">Cancelar</v-btn>
        </v-card-actions>
      </v-card>
    </v-container>
  </div>
</template>
<script>
import FormSabor from "./FormSabor.vue";

export default {
  name: "add-sabor",
  data() {
    return {
      header: []
    };
  },
  components: {
    "form-sabor": FormSabor
  },
  methods: {
    save() {}
  }
};
</script>

