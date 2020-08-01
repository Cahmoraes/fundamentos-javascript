const privates = new WeakMap()

function Queue() {
  const me = new Object({
    tail: 0,
    first: 0,
    items: {}
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
  delete p.items[p.first]
  p.first++
  return first
}

Queue.prototype.peek = function () {
  if (this.isEmpty()) return undefined
  const p = privates.get(this)
  return p.items[p.first]
}

Queue.prototype.toString = function () {
  if (this.isEmpty()) return ''
  const p = privates.get(this)
  let frame = p.items[p.first]
  for (let i = p.first + 1; i < p.tail; i++) {
    frame = `${frame}, ${p.items[i]}`
  }
  return frame
}

const q = new Queue
q.enqueue('caique')
q.enqueue('isabella')
q.enqueue('thomas')
q.enqueue('igormk.')
console.log(q.toString())
