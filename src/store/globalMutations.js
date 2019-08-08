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
  cliente: {}
};

const getters = {
  getAlerta: state => state.alerta,
  getCliente: state => state.cliente
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
  }
};

export default {
  state,
  getters,
  actions,
  mutations
};