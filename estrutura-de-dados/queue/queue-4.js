/* 
  Fila é uma estrutura de dados que segue o conceito de FIFO, First in First Out.
  Ou seja, o primeiro elemento a entrar na fila, é o primeiro a sair.
  Imagine uma fila de banco, cinema... O primeiro cliente a entrar no fim da fila, é o primeiro
  a ser atendido.
*/
const privates = new WeakMap

function Queue() {
  const me = new Object({
    items: {},
    first: 0,
    tail: 0
  })
  privates.set(this, me)
}

Queue.prototype.size = function () {
  const p = privates.get(this)
  return p.tail - p.first
}

Queue.prototype.isEmpty = function () {
  return this.size() === 0
}

Queue.prototype.enqueue = function (elemento) {
  const p = privates.get(this)
  p.items[p.tail] = elemento
  p.tail++
  return this.size()
}

Queue.prototype.dequeue = function () {
  if (this.isEmpty()) return undefined
  const p = privates.get(this)
  const first = p.items[p.first]
  p.first++
  return first
}

Queue.prototype.peek = function () {
  if (this.isEmpty()) return undefined
  const p = privates.get(this)
  return p.items[p.first]
}

Queue.prototype.clear = function () {
  const p = privates.get(this)
  p.first = 0
  p.tail = 0
  p.items = {}
}

Queue.prototype.toString = function () {
  if (this.isEmpty()) return ''
  const p = privates.get(this)
  return Object.values(p.items).toString()
}

const q = new Queue
q.enqueue('caique')
q.enqueue('isabella')
q.enqueue('thomas')
q.enqueue('igor')

console.log(q.toString())