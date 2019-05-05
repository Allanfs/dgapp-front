/*
    State responsável por permitir a comunicação
    entre o dialog e o botão de edição em um data-
    table.
*/

const state = {
    enderecoAberto: false,
    telefoneAberto: false,
    item: {}
}
const getters = {
    isEnderecoAberto: state => state.enderecoAberto,
    isTelefoneAberto: state => state.telefoneAberto,
    getItem: state => state.item
}
const actions = {}
const mutations = {
    /**
     * Altera o estado entre true ou false
     */
    toggleEndereço: (state) => {
        state.enderecoAberto = !state.enderecoAberto
    },
    toggleTelefone: (state) => {
        state.telefoneAberto = !state.telefoneAberto
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