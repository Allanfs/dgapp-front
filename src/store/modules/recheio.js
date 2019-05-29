import recheioDao from "../../store/api/services/recheio.js";
import { ALERTAR } from './mutations'
import { RECHEIOVR } from '../vuexroutes/recheio.vr.js'



const state = {
  dialog: false,
  recheioEditar: null,
  listaRecheios: []

}

const getters = {
  [RECHEIOVR.getters.itemEditavel]: (state) => state.recheioEditar,
  [RECHEIOVR.getters.listaRecheios]: (state) => state.listaRecheios,
  [RECHEIOVR.getters.dialog]: (state) => state.dialog
}

const actions = {

  [RECHEIOVR.actions.salvar](state, valor) {

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
  [RECHEIOVR.actions.buscar](state, valor) {
    recheioDao.buscarPorId(valor).then(reponse => {
      console.log("Sucesso", response)
    }).catch(error => {
      console.log("Erro", error)
    })
  },
  [RECHEIOVR.actions.listar]({ commit }) {
    recheioDao.listar()
      .then(({ data }) => commit(RECHEIOVR.mutations.setRecheios, data))
  },
  [RECHEIOVR.actions.excluir] (state, valor) {
    recheioDao.excluir(valor).then( ({response: data}) => {
      console.log(data)
      state.commit(
        ALERTAR,    // a mutation que será executada
        "Item excluído com sucesso",
        { root: true })   // se a mutations é a root ou não
    }).catch( ( {response: { data: { status, message, path} } } ) => {
      console.log( `Exclusão. Status: '${status} - ${message}' | Path: '${path}'`)
    })
  }

}

const mutations = {
  [RECHEIOVR.mutations.limparItemEditavel]: (state) => state.recheioEditar = null,
  [RECHEIOVR.mutations.setRecheios]: (state, valores) => state.listaRecheios = valores,
  [RECHEIOVR.mutations.toggleDialog]: (state) => state.dialog = !state.dialog,
  [RECHEIOVR.mutations.setItemEditavel]: (state, valor) => state.recheioEditar = valor

}

export default {
  state,
  getters,
  actions,
  mutations
};