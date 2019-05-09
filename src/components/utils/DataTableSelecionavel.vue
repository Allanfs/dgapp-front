<template>
  <v-container fluid>
    <v-layout justify-center row align-center>
      <v-flex>
        <v-data-table
          @input="clicou"
          v-model="selected"
          :headers="headers"
          :items="recheio"
          :pagination.sync="pagination"
          select-all
          item-key="nome"
          class="elevation-3"
        >
          <template v-slot:headers="props">
            <tr>
              <th>
                <v-checkbox
                  :input-value="props.all"
                  :indeterminate="props.indeterminate"
                  primary
                  hide-details
                  @click.stop="toggleAll"
                ></v-checkbox>
              </th>
              <th
                v-for="header in props.headers"
                :key="header.text"
                :class="['column sortable', pagination.descending ? 'desc' : 'asc', header.value === pagination.sortBy ? 'active' : '', `text-md-${header.align}`]"
                @click="changeSort(header.value)"
              >
                <v-icon small>arrow_upward</v-icon>
                {{ header.text }}
              </th>
            </tr>
          </template>
          <template v-slot:items="props">
            <tr :active="props.selected" @click="props.selected = !props.selected">
              <td>
                <v-checkbox :input-value="props.selected" primary hide-details></v-checkbox>
              </td>
              <td class="text-xs-center">{{ props.item.nome }}</td>
              <td class="text-xs-center" v-if="props.item.especial">
                <v-icon>star</v-icon>
              </td>
              <td class="text-xs-center" v-if="!props.item.especial">
                <v-icon>star_border</v-icon>
              </td>
            </tr>
          </template>
        </v-data-table>
      </v-flex>
    </v-layout>
  </v-container>
</template>
<script>
export default {
  props: {
    recheio: Array,
    headers: Array
  },
  data: () => ({
    pagination: {
      sortBy: "nome"
    },
    selected: []
    // headers: HSABOR
  }),
  computed: {
    // recheio() {
    //   return this.$store.getters["recheio/allRecheios"];
    // }
  },

  methods: {
    clicou() {
      this.$emit("input", this.selected);
    },
    toggleAll() {
      if (this.selected.length) this.selected = [];
      else this.selected = this.recheio.slice();
    },
    changeSort(column) {
      if (this.pagination.sortBy === column) {
        this.pagination.descending = !this.pagination.descending;
      } else {
        this.pagination.sortBy = column;
        this.pagination.descending = false;
      }
    }
  }
};
</script>