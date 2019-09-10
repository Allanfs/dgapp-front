<template>
  <v-card>
      <v-card-title>
        <h3>Pedido</h3>
        <span v-if="numero_pedido">Nº {{numero_pedido}}</span>
        <v-chip>{{estado}}</v-chip>
      </v-card-title>
      
      <v-card-text>
        <v-layout>
          <v-flex v-if="hora_abertura">
            <h4>Hora de Abertura:</h4>{{hora_abertura}}
          </v-flex>
          <v-flex v-if="hora_fechamento">
            <h4>Hora de Fechamento:</h4>{{hora_fechamento}}
          </v-flex>
        </v-layout>
      </v-card-text>
    </v-card>
</template>

<script>
import facade from '../../../facade';
export default {
  name: "informacoes-pedido",
  computed: {
    numero_pedido() {
      return facade.pedido.getNumeroPedido()
    },
    estado() {
      return facade.pedido.getEstado()
    },
    hora_abertura() {
      return facade.pedido.getHoraAbertura()
    },
    hora_fechamento() {
      return facade.pedido.getHoraFechamento()
    },
  },
  data: () => ({})

}
</script>
