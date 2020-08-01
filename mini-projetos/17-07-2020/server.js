const express = require('express')
const app = express()
const bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

app.post('/usuarios', (req, res) => {
  console.log(req.body)
  res.send('<h1>Usuário cadastrado</h1>')
})

app.get('/usuarios', (req, res) => {
  console.log(req.body)
  console.log(req.query)
  res.send('<h1>Usuário cadastrado</h1>')
})

app.post('/usuarios/:id', (req, res) => {
  console.log(req.body)
  console.log(req.params.id)
  res.send('<h1>Alterado</h1>')
})

app.listen(3003, () => {
  console.log('Servidor escutando')
})