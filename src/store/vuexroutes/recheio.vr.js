export const RECHEIOVR = {
  actions: {
    salvar: 'salvar',
    listar: 'listarTodos',
    buscar: 'buscarUm',
    excluir: 'excluir'

  },
  getters: {
    dialog: 'getDialogState',
    itemEditavel: 'recheioEditar',
    listaRecheios: 'getListaRecheios'
  },
  mutations: {
    toggleDialog: 'toggleDialog',
    limparItemEditavel: 'limpaItemEditavel',
    setRecheios: 'setRecheios',
    setItemEditavel: 'setItemEditavel'
  }
}