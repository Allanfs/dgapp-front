<template>
  <v-form>
    <v-container>
      <v-layout row wrap>
    <v-radio-group v-model="radios" :mandatory="false" row>
      <v-radio label="CPF" value="cpf"></v-radio>
      <v-radio label="Telefone" value="telefone"></v-radio>
    </v-radio-group>
        <v-flex xs12>
          <v-text-field
            v-model="dado"
            append-icon="search"
            box
            :label="obterLabel"
            type="text"
            :mask="obterMascara()"
            @click:append="consultar"
          ></v-text-field>
        </v-flex>

      </v-layout>
    </v-container>
  </v-form>
</template>

<script>
export default {
  name: 'consultar-cliente',
  data: () => ({
      dado: '',
      radios:'telefone',
    }),

    computed: {
      obterLabel () {
        if (this.radios === "cpf") {
          return 'Buscar por CPF'
        }
        if (this.radios === "telefone") {
          return 'Buscar por número de telefone'
        }
      }
    },

    methods: {
      obterMascara() {
        if(this.radios === "cpf"){ return '###.###.###-##'}
        if(this.radios === "telefone"){ return '#####-####'}

      },
      consultar () {
        this.$store.dispatch('cliente/buscarCliente',{dado: this.dado, tipo: this.radios })
        // this.marker = !this.marker
      }
    }
  }
</script>

<style>

</style>
