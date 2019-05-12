import { http } from '../config.js'

const servico = 'cliente'

const buscaPorNome = `${servico}/nome`
const buscaPorCpf = `${servico}/cpf`
const buscaPorTelefone = `${servico}/telefone`


export default {

    /**
     * Lista todos os clientes cadastrados
     */
    listar: () => {
        return http.get(servico)
    },
    
    /**
     * Busca um cliente pelo nome cadastrado
     */
    buscarPorNome: (nome) => {
        return http.get(`${buscaPorNome}/${nome}`)
    },
    buscarPorCpf: (cpf) => {
        return http.get(`${buscaPorCpf}/${cpf}`)
    },
    buscarPorTelefone: (telefone) => {
        return http.get(`${buscaPorTelefone}/${telefone}`)
    },
    salvar: (cliente) => {
        return http.post(servico, cliente)
    }
}