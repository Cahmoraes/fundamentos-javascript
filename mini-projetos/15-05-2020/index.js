const fetch = require('node-fetch')

const url = 'http://localhost:3010/produtos'

const getProdutos = () => {
  fetch(url)
    .then(res => res.json())
    .then(console.log)
}

const getProduto = id => {
  fetch(`${url}/${id}`)
    .then(response => response.json())
    .then(console.log)
}

const adicionarProduto = produto => {
  fetch(url, {
    method: 'POST',
    headers: {
      'content-type': 'application/json'
    },
    body: JSON.stringify(produto)
  })
    .then(res => res.json())
    .then(console.log)
}

adicionarProduto({ nome: 'carro', preco: 1235.99 })

// getProduto(2)
// getProdutos()