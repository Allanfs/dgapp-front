import tamanhoDao from "../api/services/tamanho.js";
import { TAMANHOVR } from '../vuexroutes/tamanho.vr'

import { ALERTAR } from './mutations'

/**
 * Guarda a informação entre estados
 */
const state = {
  tamanhoEditar: null,
  listaTamanhos: [],
  dialog: false
};

/**
 * Métodos de acesso ao estado.
 * Análogo a um método getter
 */
const getters = {
  [TAMANHOVR.getters.itemEditavel]: (state) => state.tamanhoEditar,
  [TAMANHOVR.getters.listaTamanhos]: (state) => state.listaTamanhos,
  [TAMANHOVR.getters.dialog]: (state) => state.dialog
  
};
/**
 * Métodos usados para realizar
 * requisições externas.
 */
const actions = {
  [TAMANHOVR.actions.salvar] (state, valor) {

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

  },
  [TAMANHOVR.actions.listar] ( {commit} ) {
    tamanhoDao.listar().then( ({data}) => commit(TAMANHOVR.mutations.setTamanhos, data))
  },
  [TAMANHOVR.actions.excluir] (state, valor) {
    tamanhoDao.excluir(valor).then( ({data}) => {
      state.commit(
        ALERTAR,    // a mutation que será executada
        "Item excluído com sucesso",
        { root: true })   // se a mutations é a root ou não
    }).catch( ( {response: { data: { status, message, path} } } ) => {
      console.log( `Exclusão. Status: '${status} - ${message}' | Path: '${path}'`)
    })
  }

};

/**
 * O que de fato modifica o estado.
 * Análogo a um método setter
 */
const mutations = {
  [TAMANHOVR.mutations.limparItemEditavel]: (state) => state.tamanhoEditar = null,
  [TAMANHOVR.mutations.setTamanhos]: (state, valor) => state.listaTamanhos = valor,
  [TAMANHOVR.mutations.toggleDialog]: (state) => state.dialog = !state.dialog,
  [TAMANHOVR.mutations.setItemEditavel]: (state, valor) => state.tamanhoEditar = valor
}

export default {
  state,
  getters,
  actions,
  mutations
};
