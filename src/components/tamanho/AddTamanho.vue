<template>
  <v-card disabled>
    <v-card-title>
      <v-toolbar color="primary" dark flat>
        <v-toolbar-title>{{titulo}} Tamanho</v-toolbar-title>
      </v-toolbar>
    </v-card-title>

    <v-card-text>
      <v-form class="px-3">
        <v-text-field v-model.trim="tamanho.nome" label="Nome" required ></v-text-field>
        <v-layout row wrap>
          <v-flex xs12 md6>
            <v-text-field v-model.trim="tamanho.centimetros" label="Centiímetros" suffix="cm" required ></v-text-field>
          </v-flex>

          <v-flex xs12 md6>
            <v-text-field
              v-model.trim="tamanho.numeroFatias"
              type="number"
              label="Número de Fatias"
              suffix="fatias"
            ></v-text-field>
          </v-flex>
        </v-layout>

        <v-text-field v-model.trim="tamanho.preco" type="number" label="Preço de Venda" prefix="$" required ></v-text-field>
        <v-checkbox v-model="tamanho.disponivel" label="Disponivel"></v-checkbox>
      </v-form>
    </v-card-text>

    <v-card-actions class="pb-3 pl-3">
      <v-btn class="success" block @click="save">Salvar</v-btn>
      <v-btn class="error" block>Cancelar</v-btn>
    </v-card-actions>
  </v-card>
</template>
<script>
import { REMOVER_ALERTA } from "@/store/modules/mutations";
import { TAMANHOVR } from "@/store/vuexroutes/tamanho.vr.js";

export default {
  name: "add-tamanho",
  created() {
    let tamanhoEditar = this.$store.getters[`tamanho/${TAMANHOVR.getters.itemEditavel}`]
    if( tamanhoEditar !== null) {
      this.tamanho = tamanhoEditar
      this.edicao = true
    }
  },
  data() {
    return {
      edicao: false,
      tamanho: {}
    };
  },
  computed: {
    titulo () {
      return this.edicao ? 'Editar' : 'Cadastrar'
    }
  },
  methods: {
    save() {
      if(this.edicao){
        this.$store.dispatch(`tamanho/${TAMANHOVR.actions.salvar}`, this.tamanho);
        this.$store.commit(`tamanho/${TAMANHOVR.mutations.limparItemEditavel}`)
        this.edicao = false
      }else{
        this.$store.dispatch(`tamanho/${TAMANHOVR.actions.salvar}`, this.tamanho);
      }
        this.tamanho = {};
    }
  }
};
</script>

