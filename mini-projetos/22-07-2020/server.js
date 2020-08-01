const Queue = require('./queue')
const app = require('express')()
const bodyParser = require('body-parser')
const cors = require('cors')
const porta = 3030

const q = new Queue

q.enqueue('caique')
q.enqueue('thomas')

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(bodyParser.text())

app.get('/pedidos', cors(), (req, res, next) => {
  res.send(q.toString())
})

app.post('/pedidos', (req, res, next) => {
  console.log(req.body)
  q.enqueue(req.body)
  res.send('Pedido recebido')
})

app.listen(porta, () => {
  console.log(`Servidor escutando na porta: ${porta}`)
})