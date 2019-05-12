<template>
  <!-- OBJETIVO: modal para cadastro de telefone -->
  <v-dialog v-model="dialogo" max-width="60%">
    <v-btn slot="activator" class="info">
      <v-icon small left>add</v-icon>Adicionar Telefone
    </v-btn>

    <v-card>
      <v-container grid-list-md>
        <v-card-title>
          <h2>Adicionar Telefone</h2>
        </v-card-title>
        <v-card-text>
          <v-form>
            <v-layout row wrap>
              <v-flex xs12 sm2 md1>
                <v-text-field v-model="telefone.ddd" type="number" label="DDD" required></v-text-field>
              </v-flex>
              <v-flex xs12 sm5 md3>
                <v-text-field v-model="telefone.numero" label="Número*" mask="#####-####" required></v-text-field>
              </v-flex>
              <v-flex xs12 sm5 md4>
                <v-text-field v-model="telefone.observacao" label="Observação"></v-text-field>
              </v-flex>
              <v-flex>
                <v-checkbox v-model="telefone.whatsapp" label="É Whatsapp"></v-checkbox>
              </v-flex>
            </v-layout>
            
          </v-form>
        </v-card-text>

        <v-card-actions>
          <v-btn color="blue darken-1" flat block @click="save">Salvar</v-btn>
          <v-btn color="blue darken-1" flat block @click="dialogo = !dialogo">Cancelar</v-btn>
        </v-card-actions>
      </v-container>
    </v-card>
  </v-dialog>
</template>
<script>
import { EDITAR_ITEM } from "@/store/modules/mutations";

export default {
  name: "form-telefone-popup",

  data() {
    return {
      dialogo: false,
      telefone: {
        ddd: "83",
        numero: "",
        whatsapp: false,
        observacao: ""
      }
    };
  },
  methods: {
    save() {
      this.dialogo=false;
      this.$store.commit('cliente/incluirTelefone', this.telefone)
      this.telefone = {
        ddd: "83",
        numero: "",
        whatsapp: false,
        observacao: ""
      }
      // console.log('valor no state',this.$store.getters["cliente/getTelefonesCliente"])
    }
  },
  computed: {
    camposObrigatorios() {
      if (this.telefone.numero === "") {
        return true;
      } else {
        return false;
      }
    }
  }
};
</script>

