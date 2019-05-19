const comp = 'recheio/'
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
  },
  /*
  estes métodos servem para diminuir a quantatidade de 
  codigo escrito nos componentes
  */
  getAction(nome){ return `${comp}${this.actions[nome]}` },
  getMutation(nome){ return `${comp}${this.mutations[nome]}` },
  getGetter(nome){ return `${comp}${this.getters[nome]}` },
}