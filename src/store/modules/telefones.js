import {DIALOG} from './mutations'

const state = {
    dialogo: false
}
const getters = {
    getDialogoState: state => state.dialogo
}
const actions = {}
const mutations = {
    [DIALOG](state) {
        state.dialogo = !state.dialogo
    }
}

export default {
    state,
    getters,
    actions,
    mutations
};