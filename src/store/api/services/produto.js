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
    salvar: (obj) => {
        return http.post(servico, obj)
    },
    excluir: (obj) => {
        return http.delete(`${servico}/${obj.id}`, obj)
    }
}