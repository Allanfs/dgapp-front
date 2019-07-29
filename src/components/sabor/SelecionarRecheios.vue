
<script>
import recheioDao from "../../store/api/services/recheio.js";

  export default {
    data: () => ({
      recheios: [{
        nome: 'Molho'
      },
      {
        nome: 'Mussarela'
      }],
      chips: []
    }),
    mounted() {
      
      recheioDao.listarTodos().then( ({data}) => this.recheios = data);
    },
    methods: {
      remove (item) {
        this.chips.splice(this.chips.indexOf(item), 1)
        this.chips = [...this.chips]
      }
    },
    computed: {
      nomesRecheios() {
        const nomes = [];
        this.recheios.forEach( recheio => {
          nomes.push(recheio.nome);
        })
        return nomes;
      }
    },
    watch: {
      chips: function (novo, anterior) {  // quando for alterado => emite o novo valor como input
        this.$emit('input', novo);
      }
    }
  }
</script>
<template>
  <v-combobox
    v-model="chips"
    :items="nomesRecheios"
    label="Recheios selecionados"
    chips
    clearable
    multiple
    counter
  >
    <template v-slot:selection="data">
      <v-chip
        :selected="data.selected"
        close
        @input="remove(data.item)"
      >
        <strong>{{ data.item }}</strong>&nbsp;
      </v-chip>
    </template>

    <!-- <template v-slot:item="{ index, item }">
      <v-text-field
        v-model="item"
        autofocus
        flat
        background-color="transparent"
        hide-details
        solo
      ></v-text-field>
      <v-spacer></v-spacer>
    </template> -->
  </v-combobox>
</template>
