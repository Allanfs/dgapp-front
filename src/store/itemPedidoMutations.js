import { pedidoService } from "../components/pedido/pedidoservice"

const state = {
  itensPedido: new Array(),
  tamanho: null,
  sabores: new Array()
}

const getters = {
  getItensPedido: state => state.itensPedido,
  getTamanho: state => state.tamanho,
  getSabores: state => state.sabores
  // getValorPedido: () => pedidoService.calcularValorTotal() // nao funciona como eu gostaria
}

const actions = {}

const mutations = {
  setItemPedido(state, payload) {
    state.itensPedido = payload
  },
  guardarItemPedido(state, payload) {
    state.itensPedido.push(payload)
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