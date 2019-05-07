export const TOGGLE_ENDERECO = "toggleEndereço";
export const TOGGLE_TELEFONE = "toggleTelefone";

export const ALERTAR = "alertar"
export const REMOVER_ALERTA = "removerAlerta"

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
