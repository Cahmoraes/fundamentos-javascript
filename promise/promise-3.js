const fetch = require('node-fetch')

const urlPost = 'https://jsonplaceholder.typicode.com/posts'

const method = 'POST'
const body = JSON.stringify({ title: 'Post', body: 'Estudo com Post' })

const request = {
  method,
  headers: {
    'Content-Type': 'application/json; charset=utf-8'
  },
  body
}

const verificaStatusOk = response => {
  if (response.ok) return response
  throw new Error(response.statusText)
}

fetch(urlPost, request)
  .then(verificaStatusOk)
  .then(response => response.json())
  .then(console.log)
  .catch(e => console.log(`Erro: ${e.message}`))

