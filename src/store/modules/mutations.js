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
  [ALERTAR] (obj) {
    console.log("Mutation " + ALERTAR);
    state.alerta = obj;
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

export const geralMutations = {
  state,
  getters,
  actions,
  mutations
};
