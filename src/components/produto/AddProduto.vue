<template>
  <div>
    <v-container fluid grid-list-md>
      <v-card disabled>
        <v-card-title>
          <h2>Cadastrar Produto</h2>
        </v-card-title>

        <v-card-text>
          <v-form class="px-3">
            <v-text-field label="Nome" v-model="produto.nome" ></v-text-field>
            <v-text-field label="Preço de Venda" prefix="$" v-model="produto.precoVenda" type="number" ></v-text-field>
            <v-text-field label="Preço de Custo" prefix="$" v-model="produto.precoCusto" type="number" ></v-text-field>
            <v-text-field label="Descrição" v-model="produto.descricao"></v-text-field>
            <v-checkbox label="Ativo" v-model="produto.ativo"></v-checkbox>
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
const modelo = {
  nome: "",
  precoVenda: "",
  precoCusto: "",
  descricao: "",
  ativo: true
}
export default {
  name: "add-produto",
  data() {
    return {
      produto: modelo
    };
  },
  methods: {
    save () {
      // fazer chamada ao action do vuex
      this.produto = modelo;
    }
  }
};
</script>

