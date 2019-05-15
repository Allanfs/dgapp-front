<template>
  <!-- OBJETIVO: listar e permitir edição e exclusão -->
  <div>
    <v-toolbar flat color="white">
      <v-toolbar-title>{{titulo}}</v-toolbar-title>

      <v-divider class="mx-2" inset vertical></v-divider>

      <!-- popup/modal -->
      <slot name="formAdd">
        <!-- <form-endereco></form-endereco> -->
      </slot>
    </v-toolbar>

    <!-- aqui é informado os cabeçalhos que a tabela possuirá -->
    <v-data-table :headers="headers" :items="propItens" class="elevation-1">

      <!-- aqui exibe apenas os dados -->
      <template #items="props">
        <td v-for="kbc in headers" >
          {{props.item[kbc.value]}}

        </td>

        <td class="justify-left layout" v-show="editavel || deletavel">
          <v-icon small class="mr-2" @click="editItem(props.item)" v-show="editavel">edit</v-icon>
          <v-icon small @click="deleteItem(props.item)" v-show="deletavel">delete</v-icon>
        </td>
      </template>

      <!-- caso não exista nenhum dado na tabela, isso será exibido: -->
      <template #no-data>
        <v-alert :value="true" color="info" icon="warning">Nenhum dado cadastrado</v-alert>
      </template>
    </v-data-table>
  </div>
</template>

<script>
import FormEnderecoPopupVue from "../endereco/FormEnderecoPopup.vue";
import { EDITAR_ITEM } from "@/store/modules/mutations";
export default {
  name: "crud-table",
  props: {
    titulo: {
      type: String,
      required: true
    },
    headers: {
      type: Array,
      required: true
    },
    propItens: {
      type: Array,
      required: true
    },
    deletavel: {
      type: Boolean,
      required: false
    },
    editavel: {
      type: Boolean,
      required: false
    }
  },
  components: {
    "form-endereco": FormEnderecoPopupVue
  },
  data: () => ({
    editedIndex: -1,
    editedItem: {},
    defaultItem: {}
  }),

  computed: {
    formTitle() {
      return this.editedIndex === -1
        ? `Novo ${this.titulo}`
        : `Editar ${this.titulo}`;
    }
  },

  watch: {
    dialog(val) {
      val || this.close();
    }
  },

  created() {
    this.initialize();
  },

  methods: {
    initialize() {},

    editItem(item) {
      /*
            identificar qual o index que este item possui 
            no propItens, que é a propriedade recebida
            em props
        */
      this.editedIndex = this.propItens.indexOf(item);
      /*
            atribuo valor do editedItem
            este será editado no formulário
        */
      this.editedItem = Object.assign({}, item);
      /*
            salva o item no state
        */
      this.$store.commit(EDITAR_ITEM, item);
      /*
            exibo o dialogo
            */
      this.$store.commit(`toggle${this.titulo}`);
    },

    deleteItem(item) {
      const index = this.propItens.indexOf(item);
      confirm("Are you sure you want to delete this item?") &&
        this.propItens.splice(index, 1);
    },

    close() {
      setTimeout(() => {
        this.editedItem = Object.assign({}, this.defaultItem);
        this.editedIndex = -1;
      }, 300);
    },

    save() {
      if (this.editedIndex > -1) {
        Object.assign(this.propItens[this.editedIndex], this.editedItem);
      } else {
        this.propItens.push(this.editedItem);
      }
      this.close();
    }
  }
};
</script>