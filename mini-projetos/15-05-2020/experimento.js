const fetch = require('node-fetch')
const url = 'https://jsonplaceholder.typicode.com/todos'

fetch(url)
  .then(response => {
    console.log(typeof response)
  })