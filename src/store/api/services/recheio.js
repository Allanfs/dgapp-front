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
    salvar: (obj) => {
        if( obj.id ) {
            return http.put(`${servico}/${obj.id}`, obj)
        }else{
            return http.post(servico, obj)
        }
    },
    excluir: (obj) => {
        return http.delete(`${servico}/${obj.id}`, obj)
    }
}