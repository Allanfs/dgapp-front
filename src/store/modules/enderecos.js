import {DIALOG} from './mutations'

const state = {
    dialogo: false,
    enderecos: [
        {
            logradouro: "Avenida Dois",
            bairro: "Loteamento Novo Progresso",
            numero: "2",
            complemento: ""
        },
        {
            logradouro: "Quadra AV 206 Norte Avenida NS 6",
            bairro: "Plano Diretor Norte",
            numero: "3",
            complemento: "palma"
        },
        {
            logradouro: "Rua Serra de Botucatu",
            bairro: "Vila Gomes Cardim",
            numero: "12",
            complemento: "-"
        }

    ]
}
const getters = {
    allEnderecos: state => state.enderecos,
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