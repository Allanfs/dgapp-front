import Vuex from 'vuex'
import Vue from 'vue'

// imports do projeto
import recheio from './modules/recheio.js'

import modalDataTable from './modules/utils/modalDataTable'
import globalMutations from './globalMutations'

Vue.use(Vuex)

export default new Vuex.Store({

    // utilizando namespacing para tratar modulos independentes
    // https://vuex.vuejs.org/ptbr/guide/modules.html#namespacing
    modules: {
        recheio: {
            namespaced: true,
            state: recheio.state,
            actions: recheio.actions,       // -> dispatch('recheio/salvar')
            getters: recheio.getters,       // -> getters['recheio/...']
            mutations: recheio.mutations    // -> commit('recheio/...')
        },
        modalDataTable,
        globalMutations
    },
    strict: true
})