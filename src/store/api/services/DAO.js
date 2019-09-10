import { http } from '../config.js'

/**
 * Classe que representaria a camada de conexão com a API.
 * Teria todos os recursos basicos para se comunicar com ela.
 */
 class DAO {
  constructor(nomeRecurso){
    this.recurso = `https://domgilittusapi.herokuapp.com/${nomeRecurso}`;  
  }

  cadastrar(dado) {
    return http.post(`${recurso}`, dado);
  }
  
  buscarPorId(id) {
    return http.get(`${recurso}/${id}`)
  }
  
  buscarTodos() {
    return http.get(this.recurso);
  };
  
  deletar(id) {
    return http.delete(`${recurso}/${id}`);
  }

  contar() {
    return http.get(`${this.recurso}/contar`);
  }
  
}

export default function Dao(recurso) {
  this.http = http;
  this.recurso = recurso;
    this._url = `https://domgilittusapi.herokuapp.com/${recurso}`;  
  // neste momento devo usar = para atribuir o valor ao atributo
  this.cadastrar = function (dado) {
    return http.post(this._url, dado);
  };

  this.deletar = function (uuid) {
    // deleta
  }

  this.listarTodos = function () {
    return http.get(this._url);
  }

  this.editar = function(novoDado) {
    // retorna o objeto editado
    // ou erro
  }

  this.contarCadastros = function () {
    return http.get(`${this._url}/contar`);
  }

  this.buscarUm = function ({parametro, valor}){
    return http.get(`${this._url}/?${parametro}=${valor}`)
  }
  
}