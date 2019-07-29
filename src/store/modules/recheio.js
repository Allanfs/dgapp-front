import recheioDao from "../../store/api/services/recheio.js";

const state = {
  recheios: null
}

const getters = {
  allRecheios: (state) => state.recheios,
  recheiosCadastrados: function (state) {
    if(state.recheios === null){
      recheioDao.listarTodos().then(({data}) => {
        console.warn("Settando 'recheios' diretamente");
        state.recheios = data;
      }).catch( error => {
        console.log(error);
      });
    }
    return state.recheios;
  }
}

const actions = {

  salvar(state, valor) {

    return recheioDao.cadastrar(valor);

  }

}

const mutations = {
  recheios(state, payload){
    state.recheios = payload;
  }
}

export default {
  state,
  getters,
  actions,
  mutations
};