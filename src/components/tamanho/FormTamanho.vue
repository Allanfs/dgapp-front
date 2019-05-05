<template>
  <v-form class="px-3">
    <v-text-field v-model="tamanho.nome" label="Nome"></v-text-field>
    <v-layout row wrap>
      <v-flex xs12 sm3>
        <v-text-field
          v-model="tamanho.centimetros"
          label="Centiímetros"
          suffix="cm"
          @input="inputando"
        ></v-text-field>
      </v-flex>

      <v-flex xs12 sm3>
        <v-text-field
          v-model="tamanho.fatias"
          type="number"
          label="Número de Fatias"
          suffix="fatias"
          @input="inputando"
        ></v-text-field>
      </v-flex>
    </v-layout>

    <v-text-field
      v-model="tamanho.preco"
      type="number"
      label="Preço de Venda"
      prefix="$"
      @input="inputando"
    ></v-text-field>
    <v-checkbox v-model="tamanho.disponivel" label="Disponivel" @input="inputando"></v-checkbox>
  </v-form>
</template>
<script>
export default {
  name: "form-tamanho",
  data() {
    return {
      tamanho: {
        nome: "",
        preco: "",
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
      this.$emit("input", this.tamanho);
    }
  }
};
</script>

