import { ALERTAR, REMOVER_ALERTA } from '@/store/modules/mutations.js'

/*
 * Aqui são inseridas todos os componentes vuex globais
 * da aplicação
 */

const state = {
  alerta: {
    type: "",
    mensagem: ""
  },
  visivel: false
};
const getters = {
  getAlerta(state) {
    return state.alerta;
  },
  visivel (state) {
    return state.visivel
  }
};
const actions = {};
const mutations = {
  [ALERTAR] (state, payload) {
    console.log("Mutation " + ALERTAR);
    state.alerta = payload;

  },
  [REMOVER_ALERTA] () {
    console.log("Mutation " + REMOVER_ALERTA);
    state.alerta = {
      type: "",
      mensagem: ""
    };
    state.visivel = false
  }
};

export default {
  state,
  getters,
  actions,
  mutations
};