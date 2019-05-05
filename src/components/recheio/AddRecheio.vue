<template>
  <div>
    <v-container fluid grid-list-md>
      <v-card disabled>
        <v-card-title>
          <h2>Cadastrar Recheio</h2>
        </v-card-title>

        <v-card-text>
          <v-form class="px-3">
            <v-text-field v-model="recheio.nome" label="Nome"></v-text-field>
            <v-checkbox v-model="recheio.especial" label="Especial"></v-checkbox>
            <v-checkbox v-model="recheio.disponivel" label="Disponível"></v-checkbox>
          </v-form>
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
// import recheioDao from '../../store/api/services/recheio.js'
import recheioDao from "@/store/api/services/recheio.js";

const modelo = {
  nome: "",
  especial: false,
  disponivel: true
};

export default {
  name: "add-recheio",
  data () {
    return {
      recheio: modelo
    };
  },
  methods: {
    save () {
      // fazer chamada ao action do vuex
      recheioDao.salvar(this.recheio);
      this.recheio = modelo;
    }
  }
};
</script>

