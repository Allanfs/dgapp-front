const comp = 'sabor/'
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
  },
  /*
  estes métodos servem para diminuir a quantatidade de 
  codigo escrito nos componentes
  */
  getAction(nome) { return `${comp}${this.actions[nome]}` },
  getMutation(nome) { return `${comp}${this.mutations[nome]}` },
  getGetter(nome) { return `${comp}${this.getters[nome]}` },
}