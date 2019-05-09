import Vuex from 'vuex'
import Vue from 'vue'

// imports do projeto
import recheio from './modules/recheio.js'
import sabor from './modules/sabor.js'
import tamanho from './modules/tamanho.js'
import produto from './modules/produto.js'
import cliente from './modules/cliente.js'
import categoria from './modules/categoria.js'

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
        sabor: {
            namespaced: true,
            state: sabor.state,
            actions: sabor.actions,
            getters: sabor.getters,
            mutations: sabor.mutations
        },
        tamanho: {
            namespaced: true,
            state: tamanho.state,
            actions: tamanho.actions,
            getters: tamanho.getters,
            mutations: tamanho.mutations
        },
        produto: {
            namespaced: true,
            state: produto.state,
            actions: produto.actions,
            getters: produto.getters,
            mutations: produto.mutations
        },
        cliente: {
            namespaced: true,
            state: cliente.state,
            actions: cliente.actions,
            getters: cliente.getters,
            mutations: cliente.mutations
        },
        categoria: {
            namespaced: true,
            state: categoria.state,
            actions: categoria.actions,
            getters: categoria.getters,
            mutations: categoria.mutations
        },
        modalDataTable,
        globalMutations
    },
    strict: true
})