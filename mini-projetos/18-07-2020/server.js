const app = require('express')()
const bodyParser = require('body-parser')
const port = 3003
const fn = require('./banco')()

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

app.get('/produtos', (req, res) => {
  res.send(fn.listarProdutos())
})

app.post('/produtos', (req, res) => {
  res.send(fn.salvarProduto(req.body))
})

app.listen(port, () => {
  console.log(`Servidor escutando na porta ${port}`)
})