/*
    State responsável por permitir a comunicação
    entre o dialog e o botão de edição em um data-
    table.
*/

const state = {
    aberto: false
}
const getters = {
    isAberto: state => state.aberto
}
const actions = {}
const mutations = {
    /**
     * Altera o estado entre true ou false
     */
    toggle: (state) => {
        state.aberto = !state.aberto
    }
}

export default {
    state,
    getters,
    actions,
    mutations
};