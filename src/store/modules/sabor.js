import saborDao from "../api/services/sabor.js";

import { ALERTAR } from './mutations'

/**
 * Guarda a informação entre estados
 */
const state = {
  sabores: [
    {
      nome: "Mussarela",
      preco: 10,
      disponivel: true,
      recheios: ["Molho", "Mussarela"]
    },
    {
      nome: "Presunto",
      preco: 10,
      disponivel: true,
      recheios: ["Molho", "Mussarela", "Presunto"]
    },
    {
      nome: "Mussarela Especial",
      preco: 12,
      disponivel: true,
      recheios: ["Molho", "Mussarela", "Requeijão"]
    },
    {
      nome: "Margueritta",
      preco: 10,
      disponivel: true,
      recheios: ["Molho", "Mussarela", "Tomate", "Manjericão"]
    },
    {
      nome: "Portuguesa",
      preco: 11,
      disponivel: true,
      recheios: [
        "Molho",
        "Mussarela",
        "Presunto",
        "Calabresa",
        "Ovo cozido",
        "Pimentão",
        "Cebola"
      ]
    },
    {
      nome: "4 Queijos",
      preco: 10,
      disponivel: true,
      recheios: ["Molho", "Mussarela", "Provolone", "Gorgonzola", "Requeijão"]
    },
    {
      nome: "Camarão Acebolado",
      preco: 15,
      disponivel: true,
      recheios: ["Molho", "Mussarela", "Camarão", "Cebola"]
    }
  ]
};

/**
 * Métodos de acesso ao estado.
 * Análogo a um método getter
 */
const getters = {
  allSabores: state => state.sabores,
};

/**
 * Métodos usados para realizar
 * requisições externas.
 */
const actions = {
  salvar (state, valor) {

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
const mutations = {}

export default {
  state,
  getters,
  actions,
  mutations
};
