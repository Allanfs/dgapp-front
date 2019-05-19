import recheioDao from "../../store/api/services/recheio.js";
import { ALERTAR } from './mutations'

const state = {
  recheioEditar: {
    id: 34,
    nome: "Teste na EDIÇÃO",
    especial: false,
    disponivel: false
  },
  listaRecheios: []

}

const getters = {
  getRecheioEditar: (state) => state.recheioEditar,
  recheiosCadastrados: function (state) {
    return recheioDao.listar
  },
  getListaRecheios: (state) => state.listaRecheios
}

const actions = {

  salvar(state, valor) {

    recheioDao.salvar(valor).then(response => {

      state.commit(
        ALERTAR,    // a mutation que será executada
        null,
        { root: true })   // se a mutations é a root ou não

    }).catch(error => {

      state.commit(
        ALERTAR,    // a mutation que será executada
        { type: 'error', visivel: true, mensagem: 'Ocorreu um erro' },   // o valor que é passado para a mutations
        { root: true })   // se a mutations é a root ou não

    });

  },
  buscar(state, valor) {
    recheioDao.buscarPorId(valor).then(reponse => {
      console.log("Sucesso", response)
    }).catch(error => {
      console.log("Erro", error)
    })
  },
  listar({ commit }) {
    recheioDao.listar()
      .then(({ data }) => commit('setRecheios', data))
  }

}

const mutations = {
  limparEdicao: (state) => state.recheioEditar = null,
  setRecheios: (state, valores) => state.listaRecheios = valores

}

export default {
  state,
  getters,
  actions,
  mutations
};