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
    getPedido: () => store.getters.getPedido,
    setPedido: p => store.commit('guardarPedido', p),
    getNumeroPedido:() => store.getters.getNumero,
    getEstado: () => store.getters.getEstado,
    getHoraAbertura: () => store.getHora_abertura,
    getHoraFechamento: () => store.getHora_fechamento,

    getTotal: () => parseFloat(store.getters.getTotal),
    setTotal: (valor) => store.commit('guardarTotal', valor),
    getDesconto: () => parseFloat(store.getters.getDesconto),
    setDesconto: (valor) => store.commit('guardarDesconto', valor),
    getFormaPagamento: () => store.getters.getPagamento,
    setFormaPagamento: (valor) => store.commit('guardarPagamento',valor),
    getTipo: () => store.getters.getTipo,
    setTipo: (valor) => store.commit('guardarTipo',valor),
    getValorTroco: () => store.getters.getValorTroco,
    setValorTroco: (valor) => store.commit('guardarValorTroco',valor),
    getValorPago: () => store.getters.getValorPago,
    setValorPago: (valor) => store.commit('guardarValorPago',valor),
    getBandeira: () => store.getters.getBandeira,
    setBandeira: (valor) => store.commit('guardarBandeira',valor),

    adicionarItemPedido({produto, quantidade, sabores, tamanho}) {
      let novoItem
      if(produto.pizza) {
        novoItem = new ItemPedido(null, produto, quantidade, tamanho, sabores)
      } else {
        novoItem = new ItemPedido(null, produto, quantidade)
      }
      let itens = store.getters.getItens
      itens.push(novoItem)
      
      let total = 0
      for (let i = 0; i < itens.length; i++) {
        total += parseFloat(itens[i].valor)
      }
      store.commit('guardarItens', itens) 
      store.commit('guardarTotal', parseFloat(total))

      // store.commit('guardarItemPedido', novoItem)
    },

    cadastrar(pedido) {
      return store.dispatch('cadastrarPedido', pedido)
    }
  },
  itemPedido: {
    getTamanho() {
      return store.getters.getTamanho
    },
    setTamanho(t){
      store.commit('guardarTamanho', t)
    },
    getSabores() {
      return store.getters.getSabores
    },
    setSabores(s) {
      store.commit('guardarSabores', s)
    },
    getItens(){
      return store.getters.getItens
    },
    setItemPedido(i){
      let itens = this.getItens()
      itens.push(i)
      store.commit('guardarItens', itens)
    }
  }
}