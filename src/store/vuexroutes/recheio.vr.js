export const RECHEIOVR = {
  actions: {
    salvar: 'salvar',
    listar: 'listarTodos',
    buscar: 'buscarUm'
  },
  getters: {
    dialog: 'getDialogState',
    itemEditavel: 'recheioEditar',
    listaRecheios: 'getListaRecheios'
  },
  mutations: {
    toggleDialog: 'recheioToggleDialog',
    limparItemEditavel: 'limpaItemEditavel',
    setRecheios: 'setRecheios'
  }
}