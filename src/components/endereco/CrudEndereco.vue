<template>
  <!-- OBJETIVO: listar endereços e permitir edição e exclusão -->
  <div>
    <v-toolbar flat color="white">
      <v-toolbar-title>Endereços</v-toolbar-title>

      <v-divider class="mx-2" inset vertical></v-divider>

      <!-- popup/modal -->
      <template name="formAdd">
        <form-endereco></form-endereco>
      </template>
    </v-toolbar>

    <v-data-table :headers="headers" :items="propItens" class="elevation-1">
      <template #items="props">
        <td v-for="campo in props.item" :key="campo">{{ campo }}</td>
        <td class="justify-left layout">
          <v-icon small class="mr-2" @click="editItem(props.item)">edit</v-icon>
          <v-icon small @click="deleteItem(props.item)">delete</v-icon>
        </td>
      </template>

      <template #no-data>
        <v-alert :value="true" color="info" icon="warning">Nenhum Telefone Cadastrado</v-alert>
      </template>
    </v-data-table>
  </div>
</template>

<script>
import FormEnderecoPopupVue from "./FormEnderecoPopup.vue";
export default {
  name: "crud-endereco",
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
      this.$store.commit("setItem", item);
      /*
            exibo o dialogo
            */
      this.$store.commit("toggle");
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