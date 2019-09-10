import store from './store/index'
import pedidoDao from "./store/api/services/pedido";
import {ItemPedido} from "./components/pedido/Modelos.js"
import { pedidoService } from './components/pedido/pedidoservice';
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
    getNumeroPedido:() => store.getters.getNumero(),
    getEstado: () => store.getters.getEstado(),
    getHoraAbertura: () => store.getHora_abertura,
    getHoraFechamento: () => store.getHora_fechamento,

    getTotal: () => store.getters.getTotal(),
    setTotal: (state, valor) => state.commit('', valor),
    getDesconto: () => store.getters.getDesconto(),
    setDesconto: (state, valor) => state.commit('', valor),
    getFormaPagamento: () => store.getters.getPagamento(),
    setFormaPagamento: (state, valor) => state.commit('',valor),

  }
}