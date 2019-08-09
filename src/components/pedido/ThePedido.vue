<template>
  <div>
    <v-container>
      <v-layout>
        <v-flex md7>
          <v-card>
            <v-container>
              <v-layout wrap grid-list-md>
                <v-flex>
                  <lista-tamanhos v-model="tamanho" />
                </v-flex>
              </v-layout>
              <v-layout>
                <v-flex>
                  <lista-sabores v-model="sabores" :quantidadeMax="tamanho.numeroMaximoSabores" />
                </v-flex>
              </v-layout>
            </v-container>
          </v-card>
        </v-flex>
        <v-spacer></v-spacer>
        <v-flex md4>
          <v-card style="position:fixed" min-width="50%">
            <v-card-title>Pedido</v-card-title>
            <v-card-text>
              <p>Cliente: {{cliente.nome}}</p>
              <v-divider />
              <p>Tamanho: {{tamanho.nome}}</p>
              <p>Sabores: {{nomesSabores}}</p>
            </v-card-text>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
import ListaSabores from "./ListaSabores.vue";
import ListaTamanhos from "./ListaTamanhos.vue";

export default {
  name: "The-Pedido",
  components: {
    "lista-sabores": ListaSabores,
    "lista-tamanhos": ListaTamanhos
  },
  computed: {
    nomesSabores() {
      let nomes = "";
      this.sabores.forEach(function(sabor) {
        nomes += sabor.nome;
        nomes += ", ";
      });
      return nomes.substr(0, nomes.length - 2);
    }
  },
  data: () => ({
    cliente: { nome: "Allan" },
    tamanho: {},
    sabores: []
  })
};
</script>

<style>
</style>
