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

      <!-- aqui será exibido o conteudo de cadastro,
      talvez até de listagem também-->
      <router-view></router-view>
    </v-container>
  </div>
</template>

<script>
import { REMOVER_ALERTA } from "@/store/modules/mutations";
export default {
  computed: {
    mensagemAlerta: {
      get: function() {
        return this.$store.getters.getAlerta;
      },
      set: function(value) {
        this.$store.commit(REMOVER_ALERTA, null, { root: true });
      }
    }
  }
};
</script>
