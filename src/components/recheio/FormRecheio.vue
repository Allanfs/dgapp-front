<template>
  <v-form class="px-3">
    <v-text-field v-model="recheio.nome" label="Nome" @input="inputando"></v-text-field>
    <v-checkbox v-model="recheio.especial" label="Especial" @input="inputando"></v-checkbox>
    <v-checkbox v-model="recheio.disponivel" label="Disponível" @input="inputando"></v-checkbox>
  </v-form>
</template>
<script>
export default {
  name: "form-recheio",
  data() {
    return {
      recheio: {
        nome: "",
        especial: false,
        disponivel: true
      }
    };
  },
  methods: {
    /**
     * Informa ao componente pai que houve input
     * e envia o objeto como payload
     */
    inputando() {
      this.$emit('input', this.recheio)
    }
  }
};
</script>

