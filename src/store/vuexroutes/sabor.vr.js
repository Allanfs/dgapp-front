export const SABORVR = {
  actions: {
    salvar: 'salvar',
    listar: 'listar'
  },
  getters: {
    dialog: 'getDialogState',
    itemEditavel: 'saborEditar',
    listaTamanhos: 'getListaSabores'
  },
  mutations: {
    toggleDialog: 'tamanhoToggleDialog',
    limparItemEditavel: 'limpaItemEditavel',
    setSabores: 'setSabores'
  }
}