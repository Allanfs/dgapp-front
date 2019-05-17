import clienteDao from "../api/services/cliente.js";

import { ALERTAR } from './mutations'

/**
 * Guarda a informação entre estados
 */
const state = {
  telefonesCliente: [],
  enderecosCliente: []
};

/**
 * Métodos de acesso ao estado.
 * Análogo a um método getter
 */
const getters = {
  getTelefonesCliente: (state) => state.telefonesCliente,
  getEnderecosCliente: (state) => state.enderecosCliente
};

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

  buscarCliente (state, { dado, tipo }) {
    if (tipo === 'cpf')  clienteDao.buscarPorCpf(dado)
    if (tipo === 'telefone')  clienteDao.buscarPorTelefone(dado)

  }

};

/**
 * O que de fato modifica o estado.
 * Análogo a um método setter
 */
const mutations = {
  incluirTelefone(state, valor) {
    state.telefonesCliente.push(valor)
    
  },
  incluirEndereco(state, valor) {
    state.enderecosCliente.push(valor)
    
  }
}

export default {
  state,
  getters,
  actions,
  mutations
};
