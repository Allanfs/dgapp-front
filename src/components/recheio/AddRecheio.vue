<template>
  <v-card disabled>
    <v-card-title>
      <v-toolbar color="primary" dark flat>
        <v-toolbar-title>{{titulo}} Recheio</v-toolbar-title>
      </v-toolbar>
    </v-card-title>

    <v-card-text>
      <v-form class="px-3">
        <v-text-field v-model="recheio.nome" label="Nome"></v-text-field>
        <v-checkbox v-model="recheio.especial" label="Especial"></v-checkbox>
        <v-checkbox v-model="recheio.disponivel" label="Disponível"></v-checkbox>
      </v-form>
    </v-card-text>

    <v-card-actions class="pb-3 pl-3">
      <v-btn class="success" block @click="save">Salvar</v-btn>
      <v-btn class="error" block @click="$emit('cancelar')">Cancelar</v-btn>
    </v-card-actions>
  </v-card>
</template>
<script>
import { REMOVER_ALERTA } from "@/store/modules/mutations";
import { RECHEIOVR } from "@/store/vuexroutes/recheio.vr.js";
import titulo from "@/mixins/tituloFormulario"

export default {
  name: "add-recheio",
  created() {
    let recheioEditar = this.$store.getters[RECHEIOVR.getGetter('itemEditavel')]
    if( recheioEditar !== null) {
      this.recheio = recheioEditar
      this.edicao = true
    }
  },
  data() {
    return {
      edicao: false,
      recheio: {
        nome: "",
        especial: false,
        disponivel: true
      }
    };
  },
  computed: {},
  methods: {
    save() {

      if(this.edicao){
        // está editando o item
        this.$store.dispatch(RECHEIOVR.getAction('salvar'), this.recheio);
        this.$store.commit(RECHEIOVR.getAction('limparItemEditavel'))
        this.edicao = false
      }else{
        // está cadastrando um novo item
        this.$store.dispatch(RECHEIOVR.getAction('salvar'), this.recheio);
      }
      
      this.recheio = {
        nome: "",
        especial: false,
        disponivel: true
      };
    }
  },
  mixins: [titulo]
};
</script>

