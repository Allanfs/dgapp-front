import Dao from './DAO.js'

export default {
  dao: new Dao('clientes'),

  findBy({tipo, dado}){
    let url;
    switch (tipo) {
      case 'telefone':
        url = this.dao._url + `/telefone/${dado}`;
        break;
      case 'cpf':
          url = this.dao._url + `/cpf/${dado}`;
          break;
      default:
        return null
    }
    
    return this.dao.http.get(url)
  }  
};