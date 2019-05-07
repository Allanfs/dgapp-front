import { http } from '../config.js'

const servico = 'cliente'

const buscaPorNome = `${servico}/nome`

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
    salvar: (cliente) => {
        return http.post(servico, cliente)
    }
}