import api from '../api/services/recheio'

const state = {}
const getters = {}
const actions = {
  listarTodos: () => {
    api.listar().then(response => {

    }).catch()
  }
}
const mutations = {}

export default {
  state,
  getters,
  actions,
  mutations
};