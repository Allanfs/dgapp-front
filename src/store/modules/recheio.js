import vuex from 'vuex'
import recheioDao from "../../store/api/services/recheio.js";
import { geralMutations, ALERTAR } from './mutations'



const state = {}
const getters = {

}
const actions = {
  salvar(state, recheio, getters, rootGetters) {
    // recheioDao.salvar(recheio).then(response => {
    //   mutations.alertar({
    //     type: "success",
    //     mensagem: "Salvo com sucesso!",
    //     visivel: true
    //   });
    // }).catch( error => {

    //   mutations.alertar({
    //     type: "error",
    //     mensagem: "Não foi possível realizar a operação",
    //     visivel: true
    //   });

    // });
    // fará chamada ao mutation raiz
    state.commit(
      ALERTAR,    // a mutations que será executada
      { type: 'success', visivel: true, mensagem: 'oi' },   // o valor que é passado para a mutations
      { root: true })   // se a mutations é a root ou não

    // mutations[ALERTAR]({type: 'success', visivel: true, mensagem: 'oi'})
  }
}
const mutations = {
  // ...geralMutations.mutations

}

export default {
  state,
  getters,
  actions,
  mutations
};