import { ALERTAR, REMOVER_ALERTA } from '@/store/modules/mutations.js'
import {ItemPedido} from "@/components/pedido/Modelos.js"

/*
 * Aqui são inseridas todos os componentes vuex globais
 * da aplicação
 */

const state = {
  alerta: {
    type: "",
    mensagem: "",
    visivel: false
  },
  cliente: {
    id: null,
    telefone: [
      {
        id: null,
        ddd: 0,
        numero: null,
        whatsapp: false,
        observacao: null
      }
    ],
    endereco: [
      {
        id: null,
        rua: null,
        bairro: null,
        complemento: null,
        numero: 0
      },
      {
        id: null,
        rua: null,
        bairro: null,
        complemento: null,
        numero: 0
      }
    ],
    nome: null,
    dataNascimento: null,
    cpf: null,
    instagram: null,
    facebook: null,
    email: null,
    dataCadastro: null
  },
  sabores: [],
  tamanho: {},
  itensPedido: [],
  produto: {},
  dialogAddProduto: false,
  dialogAddPizza: false,
  dialogSelecionarItem: false,
  dialogSelecionarCliente: false
};

const getters = {
  getAlerta: state => state.alerta,
  getSabores: state => state.sabores,
  getTamanho(state) {
    return state.tamanho
  },
  getProduto: state => state.produto,
  dialogAddProduto: state => state.dialogAddProduto,
  dialogAddPizza: state => state.dialogAddPizza,
  dialogSelecionarItem: state=> state.dialogSelecionarItem,
  dialogSelecionarCliente: state=> state.dialogSelecionarCliente,
};

const actions = {};

const mutations = {
  [ALERTAR](state, payload) {

    if (payload === null) {

      state.alerta = { 
        type: 'success', 
        visivel: true, 
        mensagem: 'Salvo com sucesso' 
      }

    }else{

      state.alerta = payload;
      
    }

  },
  [REMOVER_ALERTA]() {
    state.alerta = {
      type: "",
      mensagem: "",
      visivel: false
    };
  },
  guardarCliente(state, payload) {
    state.cliente = payload
  },
  guardarSabores(state, payload) {
    state.sabores = payload
  },
  guardarTamanho(state, payload) {
    state.tamanho = payload
  },
  guardarItemPedido(state, payload) {
    state.itensPedido.push(payload);
  },
  adicionarItemPedido(state, {produto, quantidade} ) {
    let novoItem;
    if (quantidade) {
      novoItem = new ItemPedido(null, produto, quantidade, null, null, null)
    } else {
      novoItem = new ItemPedido(null, produto, 1, null, null, null)
    }
    
    this.commit('guardarItemPedido',novoItem)
    
  },
  guardarProduto(state, produto){
    state.produto = produto
  },
  settarDialogAdicionarProduto(state, bool){
    state.dialogAddProduto = bool
  },
  dialogAddProduto(state, bool) {
    state.dialogAddProduto = bool
  },
  dialogAddPizza(state, bool) {
    state.dialogAddPizza = bool
  },
  dialogSelecionarItem(state, bool){
    state.dialogSelecionarItem = bool
  },
  dialogSelecionarCliente(state, bool){
    state.dialogSelecionarCliente = bool
  }
};

export default {
  state,
  getters,
  actions,
  mutations
};