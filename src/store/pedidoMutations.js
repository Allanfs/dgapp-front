import { pedidoService } from "../components/pedido/pedidoservice"

const state = {
  pedido: {}
}

const getters = {
  getHoraAbertura: state => state.pedido.horaAbertura,
  getValorPedido: state => state.pedido.valorTotal,
  getPedido: state => state.pedido,
}

const actions = {

}

const mutations = {
  adicionarDesconto(state, valor) {
    pedidoService.setDesconto(valor)
    state.pedido.desconto = valor
  },
  removerDesconto(state) {
    pedidoService.setDesconto(0)
    state.pedido.desconto = 0
  }
}

export default {
  state,
  getters,
  actions,
  mutations
};