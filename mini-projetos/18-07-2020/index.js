const fetch = require('node-fetch')
const { response } = require('express')
const url = 'http://127.0.0.1:3003/produtos'


const listarProdutos = () => {
  fetch(url)
    .then(response => response.json())
    .then(console.log)
}

const adicionarProduto = () => {
  fetch(url, {
    method: 'POST',
    headers: {
      'content-type': 'application/json; charset=utf-8'
    },
    body: JSON.stringify({ nome: 'Computador', preco: 123.44 })
  })
    .then(response => response.json())
    .then(console.log)
}

adicionarProduto()
// listarProdutos()