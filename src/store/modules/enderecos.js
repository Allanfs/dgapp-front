const state = {
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
    allEnderecos: state => state.enderecos
}
const actions = {}
const mutations = {}

export default {
    state,
    getters,
    actions,
    mutations
};