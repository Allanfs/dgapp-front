export const SABORVR = {
  actions: {
    salvar: 'salvar',
    listar: 'listar',
    excluir: 'excluir'
  },
  getters: {
    dialog: 'getDialogState',
    itemEditavel: 'saborEditar',
    listaSabores: 'getListaSabores'
  },
  mutations: {
    toggleDialog: 'toggleDialog',
    limparItemEditavel: 'limpaItemEditavel',
    setSabores: 'setSabores'
  }
}