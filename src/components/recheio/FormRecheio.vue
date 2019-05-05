<template>
  <v-form class="px-3">
    <v-text-field v-model="recheio.nome" label="Nome"></v-text-field>
    <v-checkbox v-model="recheio.especial" label="Especial"></v-checkbox>
    <v-checkbox v-model="recheio.disponivel" label="Disponível"></v-checkbox>
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
  }
};
</script>

