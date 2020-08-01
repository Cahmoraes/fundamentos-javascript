const fetch = require('node-fetch')
const urlPost = 'https://jsonplaceholder.typicode.com/posts'
const urlGet = 'https://jsonplaceholder.typicode.com/todos/1'

const send = {
  title: 'Estudo fetch',
  body: 'Estudando o fetch API'
}

fetch(urlPost, {
  method: 'POST',
  body: JSON.stringify(send),
  headers: {
    'content-Type': 'application/json;charset=utf-8'
  }
})
  .then(res => res.json())
  .then(console.log)