import { http } from '../config.js'

const servico = 'recheio'

const buscaPorNome = `${servico}/nome`

export default {

    /**
     * Lista todos os recheios cadastrados
     */
    listar: () => {
        return http.get(servico)
    },
    
    /**
     * Busca um recheio pelo nome cadastrado
     */
    buscarPorNome: (nome) => {
        return http.get(`${buscaPorNome}/${nome}`)
    },
    buscarPorId: (id) => {
        return http.get(`${servico}/${id}`)
    },
    salvar: (recheio) => {
        if( recheio.id ) {
            return http.put(`${servico}/${recheio.id}`, recheio)
        }else{
            return http.post(servico, recheio)
        }
    }
}