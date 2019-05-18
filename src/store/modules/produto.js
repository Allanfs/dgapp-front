import produtoDao from "../api/services/produto.js";

import { ALERTAR } from './mutations'

/**
 * Guarda a informação entre estados
 */
const state = {
  produtoEditar: null
};

/**
 * Métodos de acesso ao estado.
 * Análogo a um método getter
 */
const getters = {
  getProdutoEditar: (state) => state.produtoEditar
};

/**
 * Métodos usados para realizar
 * requisições externas.
 */
const actions = {
  salvar (state, valor) {

    produtoDao.salvar(valor).then( response => {

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
  limparEdicao (state) {
    state.produtoEditar = null
  }
}

export default {
  state,
  getters,
  actions,
  mutations
};
