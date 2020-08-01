const url = 'https://jsonplaceholder.typicode.com/todos'
const imageURL = './image.jpg'
const turmas = [
  "http://files.cod3r.com.br/curso-js/turmaA.json",
  "http://files.cod3r.com.br/curso-js/turmaB.json",
  "http://files.cod3r.com.br/curso-js/turmaC.json"
]

const fetchTurma = arrayTurmas => {
  return arrayTurmas.map(turma => {
    return fetch(turma)
  })
}

const toJson = responses => {
  return responses.map(res => {
    return res.json()
  })
}


// Promise.all(fetchTurma(turmas))
//   .then(response => {
//     console.log(response[0].ok)
//   })


const urlPost = 'https://jsonplaceholder.typicode.com/posts'

fetch(urlPost, {
  method: 'POST',
  mode: 'cors',
  body: JSON.stringify({ title: 'Estudo', body: 'Estudo JS' }),
  headers: {
    'content-type': 'application/json; charset=utf-8'
  },
}).then(response => {
  return response.json()
})
  .then(console.log)