import Vuex from 'vuex'
import Vue from 'vue'

// imports do projeto
import recheio from './modules/recheio.js'

import globalMutations from './globalMutations'
import itemPedidoMutation from './itemPedidoMutations'
import pedidoState from './pedidoState.js'

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
        itemPedido: itemPedidoMutation,
        pedido: pedidoState,
        globalMutations
    },
    strict: true
})