const express = require('express')
const bodyParser = require('body-parser')
const porta1 = 3005
const banco = require('./revisao-banco-2')()

const app = express()

app.use(bodyParser.urlencoded({ extended: true }))

app.get('/produtos', (req, res, next) => {
  console.log(`Produtos listados`)
  res.send(banco.listarProdutos())
})

app.post('/produtos', (req, res, next) => {
  const produto = banco.salvarProduto({
    nome: req.body.nome,
    preco: req.body.preco
  })
  res.send(produto)
})


app.listen(porta1, () => console.log(`Servidor na porta ${porta1}`))