import { http } from '../config.js'

const servico = 'produto'

const buscaPorNome = `${servico}/nome`

export default {

    /**
     * Lista todos os produtos cadastrados
     */
    listar: () => {
        return http.get(servico)
    },
    
    /**
     * Busca um produto pelo nome cadastrado
     */
    buscarPorNome: (nome) => {
        return http.get(`${buscaPorNome}/${nome}`)
    },
    salvar: (produto) => {
        return http.post(servico, produto)
    }
}