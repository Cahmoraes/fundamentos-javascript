const app = require('express')()
const bodyParser = require('body-parser')
const functions = require('./functions')
const porta = 3010

app.use(bodyParser.urlencoded({ extended: true }))

app.get('/produtos', (req, res, next) => {
  res.send(functions.listarProdutos())
})

app.get('/produtos/:id', (req, res, next) => {
  const produto = functions.listarProduto(req.params.id)
  res.send(produto)
})

app.post('/produtos', (req, res, next) => {
  console.log('adicionar produto')
  console.log(req.body)
  const produto = functions.salvarProduto({
    nome: req.body.nome,
    preco: req.body.preco
  })
  res.send(produto)
})

app.listen(porta, () => {
  console.log(`Servidor escutando na porta ${porta}`)
})

