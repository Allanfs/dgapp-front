import { http } from '../config.js'

const servico = 'sabor'

const buscaPorNome = `${servico}/nome`

export default {

    /**
     * Lista todos os sabores cadastrados
     */
    listar: () => {
        return http.get(servico)
    },
    
    /**
     * Busca um sabor pelo nome cadastrado
     */
    buscarPorNome: (nome) => {
        return http.get(`${buscaPorNome}/${nome}`)
    },
    salvar: (sabor) => {
        return http.post(servico, sabor)
    }
}