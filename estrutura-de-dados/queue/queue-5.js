const privates = new WeakMap

class Queue {
  constructor() {
    const me = new Object({
      tail: 0,
      first: 0,
      items: {}
    })
    privates.set(this, me)
  }

  size() {
    const p = privates.get(this)
    return p.tail - p.first
  }

  isEmpty() {
    return this.size() === 0
  }

  clear() {
    const p = privates.get(this)
    p.first = 0
    p.tail = 0
    p.items = {}
  }

  enqueue(elemento) {
    const p = privates.get(this)
    p.items[p.tail] = elemento
    p.tail++
    return this.size()
  }

  dequeue() {
    if (this.isEmpty()) return undefined
    const p = privates.get(this)
    const elemento = p.items[p.first]
    delete p.items[p.first]
    p.first++
    return elemento
  }

  toString() {
    if (this.isEmpty()) return ''
    return Object.values(privates.get(this).items).toString()
  }
}

const q = new Queue
console.log(q.enqueue('caique'))
console.log(q.enqueue('thomas'))
console.log(q.toString())