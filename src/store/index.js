import Vuex from 'vuex'
import Vue from 'vue'

// imports do projeto
import modalDataTable from './modules/utils/modalDataTable'
import Sabores from './modules/sabores.js'

Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        modalDataTable,
        Sabores
    }
})