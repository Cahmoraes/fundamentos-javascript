const fetch = require('node-fetch')

const url = 'http://localhost:3030'

const obterPedidos = () => {
  return fetch(url + '/pedidos')
}

const realizarPedidos = () => {
  return fetch(url + '/pedidos', {
    method: 'POST',
    headers: {
      'content-type': 'text/plain; charset=utf-8'
    },
    body: 'Igor'
  })
}

const verificaStatus = response => {
  if (response.ok) return response
  throw new Error('Não foi possível comunicar ao servidor')
}

realizarPedidos()
  .then(verificaStatus)
  .then(response => response.text())
  .then(console.log)
  .catch(console.log)

obterPedidos()
  .then(verificaStatus)
  .then(response => response.text())
  .then(console.log)
  .catch(console.log)