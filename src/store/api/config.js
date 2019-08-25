import axios from 'axios'

// Arquivo de configuração de conexão com a API

// const HOST = 'localhost'
const HOST = 'https://domgilittusapi.herokuapp.com/'
const PORT = '8081'

export const http = axios.create({
    baseURL: `${HOST}/`
})