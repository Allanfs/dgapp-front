import {TOGGLE_TELEFONE, TOGGLE_ENDERECO, EDITAR_ITEM} from '@/store/modules/mutations.js'
/*
    State responsável por permitir a comunicação
    entre o dialog e o botão de edição em um data-
    table.
*/

const state = {
    enderecoAberto: false,
    telefoneAberto: false,
    estado_dialogo: false,
    item: {}
}
const getters = {
    isEnderecoAberto: state => state.enderecoAberto,
    isTelefoneAberto: state => state.telefoneAberto,
    getEstadoDialogo: state => state.estado_dialogo,
    getItem: state => state.item
}
const actions = {}
const mutations = {
    /**
     * Altera o estado entre true ou false
     */
    [TOGGLE_ENDERECO]: (state) => {
        state.enderecoAberto = !state.enderecoAberto
    },
    [TOGGLE_TELEFONE]: (state) => {
        state.telefoneAberto = !state.telefoneAberto
    },
    setEstadoDialogo: (state) => {
        state.estado_dialogo = !state.estado_dialogo
    },
    /**
     * Salva um objeto no state
     */
    [EDITAR_ITEM]: (state, objeto) => {
        state.item = objeto
    }
}

export default {
    state,
    getters,
    actions,
    mutations
};