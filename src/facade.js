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
    getNumeroPedido:() => store.getters.getNumero,
    getEstado: () => store.getters.getEstado,
    getHoraAbertura: () => store.getHora_abertura,
    getHoraFechamento: () => store.getHora_fechamento,

    getTotal() {return store.getters.getTotal},
    setTotal: (valor) => store.commit('guardarTotal', valor),
    getDesconto: () => store.getters.getDesconto,
    setDesconto: (valor) => store.commit('guardarDesconto', valor),
    getFormaPagamento: () => store.getters.getPagamento,
    setFormaPagamento: (valor) => store.commit('guardarPagamento',valor),

    adicionarItemPedido({produto, quantidade, sabores, tamanho}) {
      let novoItem
      if(produto.pizza) {
        novoItem = {
          produto: produto,
          quantidade: quantidade,
          tamanho: tamanho,
          sabores: sabores
        }
      } else {
        novoItem = {
          produto: produto,
          quantidade: quantidade
          }
      }
      
      this.$store.commit('guardarItemPedido', novoItem)
    }
  }
}