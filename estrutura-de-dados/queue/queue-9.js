const privates = new WeakMap()

function Queue() {
  const me = {
    tail: 0,
    first: 0,
    items: {}
  }
  privates.set(this, me)
}

Queue.prototype.size = function () {
  return privates.get(this).tail - privates.get(this).first
}

Queue.prototype.isEmpty = function () {
  return this.size() === 0
}

Queue.prototype.clear = function () {
  const p = privates.get(this)
  p.items = {}
  p.tail = 0
  p.first = 0
}

Queue.prototype.enqueue = function (element) {
  const p = privates.get(this)
  p.items[p.tail] = element
  p.tail++
  return this.size()
}

Queue.prototype.dequeue = function () {
  if (this.isEmpty()) return undefined
  const p = privates.get(this)
  const element = p.items[p.first]
  delete p.items[p.first]
  p.first++
  return element
}


Queue.prototype.peek = function () {
  if (this.isEmpty()) return undefined
  return privates.get(this).items[privates.get(this).first]
}

Queue.prototype.toString = function () {
  if (this.isEmpty()) return ''
  const p = privates.get(this)
  let queue = p.items[p.first]
  console.log(p.items, p.tail)
  for (let i = p.first + 1; i < p.tail; i++) {
    queue = `${queue}, ${p.items[i]}`
  }
  return queue
}

const q = new Queue()
console.log(q.enqueue('caique'))
console.log(q.enqueue('thomas'))
console.log(q.enqueue('isabella'))
q.dequeue()
console.log(q.toString())
