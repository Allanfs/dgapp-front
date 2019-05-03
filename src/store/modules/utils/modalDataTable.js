/*
    State responsável por permitir a comunicação
    entre o dialog e o botão de edição em um data-
    table.
*/

const state = {
    aberto: false,
    item: {}
}
const getters = {
    isAberto: state => state.aberto,
    getItem: state => state.item
}
const actions = {}
const mutations = {
    /**
     * Altera o estado entre true ou false
     */
    toggle: (state) => {
        state.aberto = !state.aberto
    },
    /**
     * Salva um objeto no state
     */
    setItem: (state, objeto) => {
        state.item = objeto
    }
}

export default {
    state,
    getters,
    actions,
    mutations
};