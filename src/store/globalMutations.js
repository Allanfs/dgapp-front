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
  }
};

const getters = {
  getAlerta: state => state.alerta
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
  }
};

export default {
  state,
  getters,
  actions,
  mutations
};