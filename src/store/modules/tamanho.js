import tamanhoDao from "../api/services/tamanho.js";

import { ALERTAR } from './mutations'

/**
 * Guarda a informação entre estados
 */
const state = {
  tamanhoEditar: null
};

/**
 * Métodos de acesso ao estado.
 * Análogo a um método getter
 */
const getters = {
  getTamanhoEditar: (state) => state.tamanhoEditar,
  tamanhosCadastrados: function (state) {
    return tamanhoDao.listar
  }
};

function ehVazio (valor) {
  return (!valor || valor.trim() === "")
}
/**
 * Métodos usados para realizar
 * requisições externas.
 */
const actions = {
  salvar (state, valor) {

    tamanhoDao.salvar(valor).then( response => {

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
    state.tamanhoEditar = null
  }
}

export default {
  state,
  getters,
  actions,
  mutations
};
