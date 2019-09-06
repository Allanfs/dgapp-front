import store from './store/index'
import pedidoDao from "./store/api/services/pedido";

export default {
  cliente: {
    set(cliente) {
      store.commit('guardarCliente', cliente)
    },
    get() {
      return store.getters.getCliente
    }
  },
  dialogos: {
    toggleAdicionarCliente(){
      store.commit('dialogSelecionarCliente',store.getters.dialogSelecionarCliente)
    },
    getDialogAdicionarCliente() {
      store.getters.dialogSelecionarCliente
    },
    setDialogAdicionarCliente(b){
      store.commit('dialogSelecionarCliente', b)
    }
  },
  pedido: {
    itens: {
      get() {

      },
      set(itens){

      },
      adicionar(i) {

      },
      removerUm(i){

      },
      removerTodos(i){

      }
    },
    cadastrar: (p) => pedidoDao.cadastrar(p)
  }
}