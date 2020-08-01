const porta = 3004
const banco = require('./revisao-banco-1')()
const express = require('express')
const bodyParser = require('body-parser')

const app = express()

app.get('/produtos', (req, res, next) => {
  console.log(`Chegou`)
  res.send(banco.retornarProdutos())
})

app.listen(porta, () => {
  console.log(`Servidor respondendo na porta ${porta}`)
})