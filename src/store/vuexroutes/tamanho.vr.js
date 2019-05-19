export const TAMANHOVR = {
  actions: {
    salvar: 'salvar',
    listar: 'listar'
  },
  getters: {
    dialog: 'getDialogState',
    itemEditavel: 'tamanhoEditar',
    listaTamanhos: 'getListaTamanhos'
  },
  mutations: {
    toggleDialog: 'tamanhoToggleDialog',
    limparItemEditavel: 'limpaItemEditavel',
    setTamanhos: 'setTamanhos'
  }
}