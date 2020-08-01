const privates = new WeakMap

function novo(fn, ...args) {
  const Obj = Object.create(fn.prototype)
  Reflect.apply(fn, Obj, args)
  return Obj
}

function Queue() {
  const me = new Object({
    tail: 0,
    first: 0,
    items: {}
  })
  privates.set(this, me)
}

Queue.prototype.size = function () {
  return privates.get(this).tail - privates.get(this).first
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
  return privates.get(this).items[privates.get(this).first]
}

Queue.prototype.clear = function () {
  const p = privates.get(this)
  p.first = 0
  p.tail = 0
  p.items = {}
}

Queue.prototype.toString = function () {
  if (this.isEmpty()) return undefined
  const p = privates.get(this)
  return Object.values(p.items).toString()
}

module.exports = { Queue }