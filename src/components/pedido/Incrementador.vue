<template>
  <div>
    <v-btn flat v-show="contador > 0" @click="decrementar">-</v-btn>
    <span>{{contador}}</span>
    <v-btn flat @click="incrementar">+</v-btn>
  </div>
</template>

<script>
export default {
  name: "incrementador",
  props: {
    limite: Number
  },
  data: () => ({
    contador: 0
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
    },
    decrementar() {
      this.contador--;
    }
  }
};
</script>
