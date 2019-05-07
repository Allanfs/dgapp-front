<template>
  <div>
    <v-container fluid grid-list-md>
      <v-card disabled>
        <v-card-title>
           <v-toolbar color="primary" dark flat>
            <v-toolbar-title>Cadastrar Tamanho</v-toolbar-title>
          </v-toolbar>
        </v-card-title>

        <v-card-text>
          <v-form class="px-3">
            <v-text-field v-model="tamanho.nome" label="Nome"></v-text-field>
            <v-layout row wrap>
              <v-flex xs12 md6>
                <v-text-field v-model="tamanho.centimetros" label="Centiímetros" suffix="cm"></v-text-field>
              </v-flex>

              <v-flex xs12 md6>
                <v-text-field v-model="tamanho.fatias" type="number" label="Número de Fatias" suffix="fatias"
                ></v-text-field>
              </v-flex>
            </v-layout>

            <v-text-field v-model="tamanho.preco" type="number" label="Preço de Venda" prefix="$"></v-text-field>
            <v-checkbox v-model="tamanho.disponivel" label="Disponivel"></v-checkbox>
          </v-form>
        </v-card-text>

        <v-card-actions class="pb-3 pl-3">
          <v-btn class="success" block @click="save">Salvar</v-btn>
          <v-btn class="error" block>Cancelar</v-btn>
        </v-card-actions>
      </v-card>
    </v-container>
  </div>
</template>
<script>
const modelo = {
  nome: "",
  preco: "",
  disponivel: true
};
export default {
  data() {
    return {
      tamanho: modelo
    };
  },
  methods: {
    save () {
      // fazer chamada ao action do vuex
      this.tamanho = modelo;
    }
  }
};
</script>

