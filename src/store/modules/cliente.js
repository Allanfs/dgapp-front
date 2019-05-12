import clienteDao from "../api/services/cliente.js";

import { ALERTAR } from './mutations'

/**
 * Guarda a informação entre estados
 */
const state = {};

/**
 * Métodos de acesso ao estado.
 * Análogo a um método getter
 */
const getters = {};

/**
 * Métodos usados para realizar
 * requisições externas.
 */
const actions = {
  salvar (state, valor) {

    clienteDao.salvar(valor).then( response => {

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

  buscarCliente (state, valor) {
    if (valor.tipo === 'cpf')  clienteDao.buscarPorCpf(valor.dado)
    if (valor.tipo === 'telefone')  clienteDao.buscarPorTelefone(valor.dado)

  }

};

/**
 * O que de fato modifica o estado.
 * Análogo a um método setter
 */
const mutations = {}

export default {
  state,
  getters,
  actions,
  mutations
};
