<template>
  <!-- OBJETIVO: modal para cadastro de endereço -->
  <v-dialog v-model="dialogo" max-width="60%">
    <v-btn slot="activator" class="info">
      <v-icon small left>add</v-icon>Adicionar Endereço
    </v-btn>
    <v-card>
      <v-container grid-list-md>
        <v-card-title>
          <h2>Adicionar Endereço</h2>
        </v-card-title>
        <v-card-text>
          <v-form>
            <v-layout row wrap>
              <v-flex xs12 sm10 md5>
                <v-text-field v-model="endereco.logradouro" label="Rua"></v-text-field>
              </v-flex>
              <v-flex xs12 sm2 md3>
                <v-text-field v-model="endereco.numero" label="Número"></v-text-field>
              </v-flex>
              <v-flex xs12 sm3 md4>
                <v-text-field v-model="endereco.bairro" label="Bairro" value></v-text-field>
              </v-flex>
              <v-flex xs12 sm5 md12>
                <v-text-field v-model="endereco.complemento" label="Complemento"></v-text-field>
              </v-flex>
            </v-layout>
          </v-form>
        </v-card-text>
        <v-card-actions>
          <v-btn
            color="blue darken-1"
            flat
            block
            @click="save"
            :disabled="camposObrigatorios"
          >Salvar</v-btn>
          <v-btn color="blue darken-1" flat block @click="dialogo = !dialogo">Cancelar</v-btn>
        </v-card-actions>
      </v-container>
    </v-card>
  </v-dialog>
</template>
<script>
import { EDITAR_ITEM } from "@/store/modules/mutations";

export default {
  name: "form-endereco",
  data() {
    return {
      dialogo: false,
      endereco: {
        logradouro: "",
        bairro: "Centro",
        numero: "",
        complemento: ""
      }
    };
  },
  methods: {
    save() {
      // verificar se o id do endereco está settado
      // se estiver significa que é uma edição de um já existente
      // se não, cria um novo

      this.dialogo = false;
      this.$store.commit("cliente/incluirEndereco", this.endereco);
      this.endereco = {
        logradouro: "",
        bairro: "Centro",
        numero: "",
        complemento: ""
      };
    }
  },
  computed: {
    camposObrigatorios() {
      if (this.endereco.logradouro === "") {
        return true;
      } else {
        return false;
      }
    }
  }
};
</script>

