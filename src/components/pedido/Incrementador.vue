<template>
  <div>
    <v-btn flat :disabled="contador <= 0" @click="decrementar" small>-</v-btn>
    <span>{{contador}}</span>
    <v-btn flat :disabled="contador == limite" @click="incrementar" small>+</v-btn>
  </div>
</template>

<script>
export default {
  name: "incrementador",
  props: {
    limite: Number,
    contador: Number
  },
  data: () => ({
  }),
  methods: {
    incrementar() {
      if (!this.limite) {
        this.contador++;
      } else {
        if (this.contador === this.limite) {
          return;
        }
      }
      this.$emit('input', this.contador)
    },
    decrementar() {
      this.contador--;
      this.$emit('input', this.contador)

    }
  }
};
</script>
