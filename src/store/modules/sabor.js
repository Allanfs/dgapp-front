import saborDao from "../api/services/sabor.js";
import { SABORVR } from "../vuexroutes/sabor.vr.js";
import { ALERTAR } from './mutations'

/**
 * Guarda a informação entre estados
 */
const state = {
  saborEditar: null
};

/**
 * Métodos de acesso ao estado.
 * Análogo a um método getter
 */
const getters = {
  [SABORVR.getters.itemEditavel]: (state) => state.saborEditar,
  [SABORVR.getters.listaSabores]: state => saborDao.listar
};

/**
 * Métodos usados para realizar
 * requisições externas.
 */
const actions = {
  [SABORVR.actions.salvar] (state, valor) {

    saborDao.salvar(valor).then( response => {

      state.commit(
        ALERTAR,    // a mutation que será executada
        null,
        { root: true })   // se a mutations é a root ou não

    }).catch( error => {

      state.commit(
        ALERTAR,    // a mutation que será executada
        { type: 'error', visivel: true, mensagem: 'Ocorreu um erro' },   // o valor que é passado para a mutations
        { root: true })   // se a mutations é a root ou não

    })

  }

};

/**
 * O que de fato modifica o estado.
 * Análogo a um método setter
 */
const mutations = {
  [SABORVR.mutations.limparItemEditavel] (state) {
    state.saborEditar = null
  }
}

export default {
  state,
  getters,
  actions,
  mutations
};
