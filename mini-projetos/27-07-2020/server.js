const porta = 3003
const app = require('express')()
const { Queue } = require('../../estrutura-de-dados/queue/queue-6')
const bodyParser = require('body-parser')
const cors = require('cors')

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(bodyParser.text())

const q = new Queue

app.get('/pessoas', cors(), (req, res, next) => {
  console.log('getPessoas')
  res.send(q.toString())
})

app.post('/pessoas', cors(), (req, res, next) => {
  res.send(q.enqueue(req.body).toString())
})

app.listen(porta, () => {
  console.log(`Servidor escutando na porta ${porta}`)
})