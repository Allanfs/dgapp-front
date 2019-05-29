export default {
  computed: {
    titulo () {
      return this.edicao ? 'Editar' : 'Cadastrar'
    }
  }
}