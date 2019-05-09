import recheioDao from "../../store/api/services/recheio.js";
import { ALERTAR } from './mutations'

const state = {
  recheios: [
    {
      nome: 'Molho',
      especial: false,
      disponivel: true,
      categoria: 'Básico'
    },
    {
      nome: 'Mussarela',
      especial: false,
      disponivel: true,
      categoria: 'Básico'
    },
    {
      nome: 'Presunto',
      especial: false,
      disponivel: false,
      categoria: 'Básico'
    },
    {
      nome: 'Frango',
      especial: false,
      disponivel: true,
      categoria: 'Básico'
    },
    {
      nome: 'Camarão',
      especial: true,
      disponivel: false,
      categoria: 'Especial'
    },
    {
      nome: 'Peito de Peru',
      especial: true,
      disponivel: true,
      categoria: 'Especial'
    },
    {
      nome: 'Peperonni',
      especial: true,
      disponivel: true,
      categoria: 'Especial'
    },
    {
      nome: 'Chocolate Cremoso',
      especial: false,
      disponivel: true,
      categoria: 'Doce'
    },
    {
      nome: 'Chocolate Branco',
      especial: false,
      disponivel: true,
      categoria: 'Doce'
    },
    {
      nome: 'Coco ralado',
      especial: false,
      disponivel: true,
      categoria: 'Doce'
    }
  ]
}

const getters = {
  allRecheios: (state) => state.recheios,
  recheiosCadastrados: function (state) {
    return recheioDao.listar
  }
}

const actions = {

  salvar(state, valor) {

    recheioDao.salvar(valor).then(response => {
     
      state.commit(
        ALERTAR,    // a mutation que será executada
        null,
        { root: true })   // se a mutations é a root ou não
      
    }).catch( error => {

      state.commit(
        ALERTAR,    // a mutation que será executada
        { type: 'error', visivel: true, mensagem: 'Ocorreu um erro' },   // o valor que é passado para a mutations
        { root: true })   // se a mutations é a root ou não

    });

  }

}

const mutations = {}

export default {
  state,
  getters,
  actions,
  mutations
};