/**
 * Guarda a informação entre estados
 */
const state = {
    sabores: [
        {
            nome: 'Mussarela',
            preco: 10,
            disponivel: true,
            recheios: ['Molho', 'Mussarela']
        },
        {
            nome: 'Presunto',
            preco: 10,
            disponivel: true,
            recheios: ['Molho', 'Mussarela', 'Presunto']
        },
        {
            nome: 'Mussarela Especial',
            preco: 12,
            disponivel: true,
            recheios: ['Molho', 'Mussarela', 'Requeijão']
        },
        {
            nome: 'Margueritta',
            preco: 10,
            disponivel: true,
            recheios: ['Molho', 'Mussarela', 'Tomate', 'Manjericão']
        },
        {
            nome: 'Portuguesa',
            preco: 11,
            disponivel: true,
            recheios: ['Molho', 'Mussarela', 'Presunto', 'Calabresa', 'Ovo cozido', 'Pimentão', 'Cebola']
        },
        {
            nome: '4 Queijos',
            preco: 10,
            disponivel: true,
            recheios: ['Molho', 'Mussarela', 'Provolone', 'Gorgonzola', 'Requeijão']
        },
        {
            nome: 'Camarão Acebolado',
            preco: 15,
            disponivel: true,
            recheios: ['Molho', 'Mussarela', 'Camarão', 'Cebola']
        }
    ]
}
/**
 * Métodos de acesso ao estado.
 * Análogo a um método getter
 */
const getters = {
    allSabores: state => state.sabores
}
/**
 * Métodos usados para realizar
 * requisições externas.
 */
const actions = {}
/**
 * O que de fato modifica o estado.
 * Análogo a um método setter
 */
const mutations = {}

export default {
    state,
    getters,
    actions,
    mutations
};