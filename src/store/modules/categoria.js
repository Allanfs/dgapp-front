import categoriaDao from "../../store/api/services/categoria.js";
import { ALERTAR } from './mutations'

const state = {
  categorias: [
    
  ]
}

const getters = {
  allcategorias: (state) => state.categorias,
  categoriasCadastradas: function (state) {
    return categoriaDao.listar
  }
}

const actions = {

  salvar(state, valor) {

    categoriaDao.salvar(valor).then(response => {
     
      state.commit(
        ALERTAR,    // a mutation que será executada
        null,
        { root: true })   // se a mutations é a root ou não
      
    }).catch( error => {

      state.commit(
        ALERTAR,    // a mutation que será executada
        { type: 'error', visivel: true, mensagem: 'Ocorreu um erro' },   // o valor que é passado para a mutations
        { root: true })   // se a mutations é a root ou não

    });

  }

}

const mutations = {}

export default {
  state,
  getters,
  actions,
  mutations
};