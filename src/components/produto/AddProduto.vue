<template>
  <div>
    <v-container fluid grid-list-md>
      <v-alert
        :value="mensagemAlerta.visivel"
        @input="mensagemAlerta =false"
        :type="mensagemAlerta.type"
        dismissible
        transition="fade-transition"
      >{{mensagemAlerta.mensagem}}</v-alert>
      <v-card disabled>
        <v-card-title>
          <v-toolbar color="primary" dark flat>
            <v-toolbar-title>Cadastrar Produto</v-toolbar-title>
          </v-toolbar>
        </v-card-title>

        <v-card-text>
          <v-form class="px-3">
            <v-text-field label="Nome" v-model="produto.nome" ></v-text-field>
            <v-layout row wrap>
              <v-flex xs12 md6>
                <v-text-field label="Preço de Venda" prefix="$" v-model="produto.precoVenda" type="number" ></v-text-field>
              </v-flex>
              <v-flex xs12 md6>
                <v-text-field label="Preço de Custo" prefix="$" v-model="produto.precoCusto" type="number" ></v-text-field>
              </v-flex>
            </v-layout>
            <v-text-field label="Descrição" v-model="produto.descricao"></v-text-field>
            <v-checkbox label="Ativo" v-model="produto.ativo"></v-checkbox>
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
  computed: {
    mensagemAlerta: {
      get: function () {
        return this.$store.getters.getAlerta
      },
      set: function (value) { 
        this.$store.commit(REMOVER_ALERTA, null, {root: true})
      }
    }
  },
  methods: {
    save () {
      this.$store.dispatch('produto/salvar', this.produto)
      this.produto = modelo;
    }
  }
};
</script>

