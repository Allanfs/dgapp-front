import { pedidoService } from "../components/pedido/pedidoservice"

const state = {
  itensPedido: []
}

const getters = {
  getItensPedido: state => state.itensPedido,
  // getValorPedido: () => pedidoService.calcularValorTotal() // nao funciona como eu gostaria
}

const actions = {

}

const mutations = {
  guardarItemPedido(state, payload) {
    pedidoService.adicionarItemNoPedido(payload)
    state.itensPedido = pedidoService.getItensPedido()
  },
  removerItemPedido(state, payload) {
    pedidoService.removerItemDoPedido(payload)
    state.itensPedido = pedidoService.getItensPedido()
  }
}

export default {
  state,
  getters,
  actions,
  mutations
};