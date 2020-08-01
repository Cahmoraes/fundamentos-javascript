const fetch = require('node-fetch')


const URLlistarProdutos = 'http://localhost:3009/produtos/'

const adicionarProduto = url => produto => {
  console.log(produto)
  fetch(url, {
    method: 'POST',
    headers: {
      'Content-type': 'application/x-www-form-urlencoded'
    },
    body: JSON.stringify(produto)
  })
    .then(res => res.json())
    .then(console.log)
    .catch(console.log)
}

const listarProdutos = url => {
  fetch(url)
    .then(res => res.json())
    .then(console.log)
}

adicionarProduto(URLlistarProdutos)({ nome: 'Computador', preco: 1.254 })
// listarProdutos(URLlistarProdutos)



