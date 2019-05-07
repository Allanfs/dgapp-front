import Vuex from 'vuex'
import Vue from 'vue'

// imports do projeto
import modalDataTable from './modules/utils/modalDataTable'
import recheio from './modules/recheio.js'
import geralMutation from './modules/mutations.js'

Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        // utilizando namespacing para tratar modulos independentes
        // https://vuex.vuejs.org/ptbr/guide/modules.html#namespacing
        recheio: {
            namespaced: true,
            state: recheio.state,
            actions: recheio.actions,       // -> dispatch('recheio/salvar')
            getters: recheio.getters,       // -> getters['recheio/...']
            mutations: recheio.mutations    // -> commit('recheio/...')
        },
        modalDataTable,
        geralMutation
    },
    strict: true
})