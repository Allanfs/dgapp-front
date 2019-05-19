export const TAMANHOVR = {
  actions: {
    salvar: 'salvar',
    listar: 'listar',
    excluir: 'excluir'
  },
  getters: {
    dialog: 'getDialogState',
    itemEditavel: 'tamanhoEditar',
    listaTamanhos: 'getListaTamanhos'
  },
  mutations: {
    toggleDialog: 'toggleDialog',
    limparItemEditavel: 'limpaItemEditavel',
    setTamanhos: 'setTamanhos',
    setItemEditavel: 'setItemEditavel'
  }
}