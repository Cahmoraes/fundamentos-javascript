const porta = 3006
const express = require('express')
const banco = require('./revisao-banco-3')()
const bodyParser = require('body-parser')

const app = express()

app.use(bodyParser.urlencoded({ extended: true }))

app.get('/produtos', (req, res, next) => {
  res.send(banco.listarProdutos())
})

app.get('/produtos/:id', (req, res, next) => {
  res.send(banco.listarProduto(req.params.id))
})

app.listen(porta, () => {
  console.log(`Servidor escutando na porta ${porta}`)
})

app.post('/produtos', (req, res, next) => {
  res.send(banco.salvarProduto({
    nome: req.body.nome
  }))
})

app.delete('/produtos/:id', (req, res, next) => {
  res.send(banco.excluirProduto(req.params.id))
})