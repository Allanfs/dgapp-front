import saborDao from "../api/services/sabor.js";

import { ALERTAR } from './mutations'

/**
 * Guarda a informação entre estados
 */
const state = {
  sabores: null
};

/**
 * Métodos de acesso ao estado.
 * Análogo a um método getter
 */
const getters = {
  allSabores: state => state.sabores,
  saboresCadastrados: state => saborDao.listar,
  recheios: state => state.sabores.recheios
};

/**
 * Métodos usados para realizar
 * requisições externas.
 */
const actions = {
  salvar (state, valor) {

    saborDao.cadastrar(valor).then( response => {

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
  adicionarRecheio (state, payload){
    state.sabor.recheios.push(payload);
  },
  removerRecheio(state, payload) {
    state.sabor.recheios.splice(state.sabor.recheios.indexOf(payload), 1)
  }
}

export default {
  state,
  getters,
  actions,
  mutations
};
