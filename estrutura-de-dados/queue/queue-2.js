const privates = new WeakMap()

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

  enqueue(elemento) {
    const p = privates.get(this)
    p.items[p.tail] = elemento
    p.tail++
    return this.size()
  }

  dequeue() {
    if (this.isEmpty()) return undefined
    const p = privates.get(this)
    const frame = p.items[p.first]
    delete p.items[p.first]
    p.first++
    return frame
  }

  peek() {
    if (this.isEmpty()) return undefined
    const p = privates.get(this)
    return p.items[p.first]
  }

  toString() {
    if (this.isEmpty()) return ''
    const p = privates.get(this)
    let frame = p.items[p.first]
    for (let i = p.first + 1; i < p.tail; i++) {
      frame = `${frame}, ${p.items[i]}`
    }
    return frame
  }

}

const q = new Queue
q.enqueue('caique')
q.enqueue('thomas')
q.enqueue('isabella')
q.enqueue('igor')
console.log(q.toString())