import { mapMutations } from 'vuex'
import recheioDao from "../../store/api/services/recheio.js";
import { mGetters, ALERTAR } from './mutations'
/**
 * Guarda a informação entre estados
 */
const state = {
  sabores: [
    {
      nome: "Mussarela",
      preco: 10,
      disponivel: true,
      recheios: ["Molho", "Mussarela"]
    },
    {
      nome: "Presunto",
      preco: 10,
      disponivel: true,
      recheios: ["Molho", "Mussarela", "Presunto"]
    },
    {
      nome: "Mussarela Especial",
      preco: 12,
      disponivel: true,
      recheios: ["Molho", "Mussarela", "Requeijão"]
    },
    {
      nome: "Margueritta",
      preco: 10,
      disponivel: true,
      recheios: ["Molho", "Mussarela", "Tomate", "Manjericão"]
    },
    {
      nome: "Portuguesa",
      preco: 11,
      disponivel: true,
      recheios: [
        "Molho",
        "Mussarela",
        "Presunto",
        "Calabresa",
        "Ovo cozido",
        "Pimentão",
        "Cebola"
      ]
    },
    {
      nome: "4 Queijos",
      preco: 10,
      disponivel: true,
      recheios: ["Molho", "Mussarela", "Provolone", "Gorgonzola", "Requeijão"]
    },
    {
      nome: "Camarão Acebolado",
      preco: 15,
      disponivel: true,
      recheios: ["Molho", "Mussarela", "Camarão", "Cebola"]
    }
  ]
};
/**
 * Métodos de acesso ao estado.
 * Análogo a um método getter
 */
const getters = {
  allSabores: state => state.sabores,
  ...geralMutations.getters
};
/**
 * Métodos usados para realizar
 * requisições externas.
 */
const actions = {
  salvar(state, recheio) {
    // recheioDao.salvar(recheio).then(response => {
    //   mutations.alertar({
    //     type: "success",
    //     mensagem: "Salvo com sucesso!",
    //     visivel: true
    //   });
    // }).catch( error => {

    //   mutations.alertar({
    //     type: "error",
    //     mensagem: "Não foi possível realizar a operação",
    //     visivel: true
    //   });
      
    // });
    commit('')
    mutations[ALERTAR]({type: 'success', visivel: true, mensagem: 'oi'})
  }
};
/**
 * O que de fato modifica o estado.
 * Análogo a um método setter
 */
const mutations = {
  // ...geralMutations.mutations
}


export default {
  state,
  getters,
  actions,
  mutations
};
