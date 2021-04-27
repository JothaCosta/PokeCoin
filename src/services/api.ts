import axios from 'axios'

const pokeapi = axios.create({
  baseURL: 'https://pokeapi.co/api/v2/pokemon'
})

const coinapi = axios.create({
  baseURL:'https://economia.awesomeapi.com.br'
})

export {pokeapi, coinapi}