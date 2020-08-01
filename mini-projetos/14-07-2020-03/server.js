const express = require('express')
const bodyParser = require('body-parser')
const port = 3009
const functions = require('./functions')()


const app = express()

app.use(bodyParser.urlencoded({ extended: true }))

app.get('/produtos', (req, res, next) => {
  res.send(functions.listarProdutos())
})

app.post('/produtos', (req, res, next) => {
  const data = JSON.parse(req.body)
  const produto = functions.salvarProduto({
    nome: data.nome,
    preco: data.preco
  })
  res.send({ produto })
})

app.listen(port, () => {
  console.log('servidor iniciado na porta: ', port)
})