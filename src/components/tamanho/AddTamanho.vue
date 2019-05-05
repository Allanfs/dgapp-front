<template>
  <div>
    <v-container fluid grid-list-md>
      <v-card disabled>
        <v-card-title>
          <h2>Cadastrar Tamanho</h2>
        </v-card-title>

        <v-card-text>
          <form-tamanho titulo="Tamanho"></form-tamanho>
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
// import FormTamanho from '../cliente/FormCliente.vue'
import FormTamanho from "./FormTamanho.vue";

export default {
  data() {
    return {
      header: []
    };
  },
  components: {
    "form-tamanho": FormTamanho
  },
  methods: {
      save () {}
  }
};
</script>

