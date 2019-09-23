import { pedidoService } from "../components/pedido/pedidoservice"
import store from './index'

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
    let itens = store.getters.getItensPedido
    let total = 0
    for (let i = 0; i < itens.length; i++) {
      total += parseFloat(itens[i].valor)
    }
    store.commit('guardarTotal', parseFloat(total))
    
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