/*
  Pilha, é uma estrutura de dados que seguem um conteito de LIFO = Last in First out.
  O que isso significa é que o último elemento a entrar na pilha, é o primeiro a sair dela.
  Imagime uma pilha de livros, onde há um livro sobre o outro. Para chegar no primeiro livro que está 
  na base da pilha, é necessário retirar os livros que chegaram antes.
*/


const privates = new WeakMap()

function Stack() {
  const me = new Object({
    count: 0,
    items: {}
  })
  privates.set(this, me)
}

Stack.prototype.size = function () {
  const p = privates.get(this)
  return p.count
}

Stack.prototype.isEmpty = function () {
  return this.size() === 0
}

Stack.prototype.push = function (elemento) {
  const p = privates.get(this)
  p.items[p.count] = elemento
  p.count++
  return this.size()
}

Stack.prototype.pop = function () {
  if (this.isEmpty()) return undefined
  const p = privates.get(this)
  const frame = p.items[p.count - 1]
  delete p.items[p.count - 1]
  p.count--
  return frame
}

Stack.prototype.peek = function () {
  if (this.isEmpty()) return undefined
  const p = privates.get(this)
  return p.items[p.count - 1]
}

Stack.prototype.clear = function () {
  const p = privates.get(this)
  p.count = 0
  p.items = {}
}

Stack.prototype.toString = function () {
  if (this.isEmpty()) return undefined
  const p = privates.get(this)
  let frame = p.items[0]
  for (let i = 1; i < this.size(); i++) {
    frame = `${frame}, ${p.items[i]}`
  }
  return frame
}

const s = new Stack
s.push('caique')
s.push('thomas')
s.push('isabella')
s.push('igor')
console.log(s.toString())
