const comp = 'tamanho/'
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
  },
  /*
  estes métodos servem para diminuir a quantatidade de 
  codigo escrito nos componentes
  */
  getAction(nome) { return `${comp}${this.actions[nome]}` },
  getMutation(nome) { return `${comp}${this.mutations[nome]}` },
  getGetter(nome) { return `${comp}${this.getters[nome]}` },
}