import { pedidoService } from "../components/pedido/pedidoservice"

const state = {
  itensPedido: [],
  tamanho: null,
  sabores: Array()
}

const getters = {
  getItensPedido: state => state.itensPedido,
  getTamanho: state => state.tamanho,
  getSabores: state => state.sabores
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
  },
  guardarTamanho(state, payload){
    state.tamanho = payload
  },
  guardarSabores(state, payload){
    state.sabores = payload
  },
}

export default {
  state,
  getters,
  actions,
  mutations
};