import tamanhoDao from "../api/services/tamanho.js";

/**
 * Guarda a informação entre estados
 */
const state = {
  tamanhos: null
};

/**
 * Métodos de acesso ao estado.
 * Análogo a um método getter
 */
const getters = {
  allTamanhos: (state) => state.tamanhos,
  tamanhosCadastrados: function (state) {
    return state.tamanhos;
  }
};

function obterTamanhosCadastrados(state) {
  tamanhoDao.listarTodos().then(({ data }) => {
    state.tamanhos = data;
  }).catch(error => {
    console.log(error);
  });
}

function ehVazio (valor) {
  return (!valor || valor.trim() === "")
}
/**
 * Métodos usados para realizar
 * requisições externas.
 */
const actions = {
  salvar (state, valor) {
    return tamanhoDao.cadastrar(valor);
  },
  obterCadastrados(state){
    obterTamanhosCadastrados(state);
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
