import { http } from '../config.js'

const servico = 'tamanho'

const buscaPorNome = `${servico}/nome`

export default {

    /**
     * Lista todos os tamanhos cadastrados
     */
    listar: () => {
        return http.get(servico)
    },
    
    /**
     * Busca um tamanho pelo nome cadastrado
     */
    buscarPorNome: (nome) => {
        return http.get(`${buscaPorNome}/${nome}`)
    },
    salvar: (tamanho) => {
        return http.post(servico, tamanho)
    }
}