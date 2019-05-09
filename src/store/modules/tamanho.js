import tamanhoDao from "../api/services/tamanho.js";

import { ALERTAR } from './mutations'

/**
 * Guarda a informação entre estados
 */
const state = {
  tamanhos: [
    {
      nome: "Pequena",
      preco: "10",
      centimetros: 10,
      disponivel: true
    },
    {
      nome: "Média",
      preco: "10",
      centimetros: 15,
      disponivel: true
    },
    {
      nome: "Grande",
      preco: "20",
      centimetros: 20,
      disponivel: true
    },
    {
      nome: "Gigante",
      preco: "25",
      centimetros: 25,
      disponivel: true
    },
    {
      nome: "Extra-Gigante",
      preco: "30",
      centimetros: 30,
      disponivel: false
    }
  ]
};

/**
 * Métodos de acesso ao estado.
 * Análogo a um método getter
 */
const getters = {
  allTamanhos: (state) => state.tamanhos,
  tamanhosCadastrados: function (state) {
    return tamanhoDao.listar
  }
};

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
const mutations = {}

export default {
  state,
  getters,
  actions,
  mutations
};
