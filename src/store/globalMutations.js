import { ALERTAR, REMOVER_ALERTA } from '@/store/modules/mutations.js'

/*
 * Aqui são inseridas todos os componentes vuex globais
 * da aplicação
 */

const state = {
  alerta: {
    type: "",
    mensagem: "",
    visivel: false
  },
  cliente: {},
  sabores: [],
  tamanho: {},
  itensPedido: []
};

const getters = {
  getAlerta: state => state.alerta,
  getCliente: state => state.cliente,
  getSabores: state => state.sabores,
  getTamanho(state) {
    return state.tamanho
  },
  getItensPedido: state => state.itensPedido
};

const actions = {};

const mutations = {
  [ALERTAR](state, payload) {

    if (payload === null) {

      state.alerta = { 
        type: 'success', 
        visivel: true, 
        mensagem: 'Salvo com sucesso' 
      }

    }else{

      state.alerta = payload;
      
    }

  },
  [REMOVER_ALERTA]() {
    state.alerta = {
      type: "",
      mensagem: "",
      visivel: false
    };
  },
  guardarCliente(state, payload) {
    state.cliente = payload
  },
  guardarSabores(state, payload) {
    state.sabores = payload
  },
  guardarTamanho(state, payload) {
    state.tamanho = payload
  },
  guardarItemPedido(state, payload) {
    state.itensPedido.push(payload);
  }
};

export default {
  state,
  getters,
  actions,
  mutations
};