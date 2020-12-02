const privates = new WeakMap

class Queue {
  constructor() {
    const me = new Object({
      first: 0,
      tail: 0,
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
    p.items = {}
    p.tail = 0
  }

  enqueue(element) {
    const p = privates.get(this)
    p.items[p.tail] = element
    p.tail++
    return this.size()
  }

  dequeue() {
    if (this.isEmpty()) return undefined
    const p = privates.get(this)
    const element = p.items[p.first]
    delete p.items[p.first]
    p.first++
    return element
  }

  peek() {
    if (this.isEmpty()) return undefined
    return privates.get(this).items[privates.get(this).first]
  }

  toString() {
    if (this.isEmpty()) return ''
    const p = privates.get(this)
    let queue = p.items[p.first]
    for (let i = p.first + 1; i < this.size(); i++) {
      queue = `${queue}, ${p.items[i]}`
    }
    return queue
  }
}

const q = new Queue
q.enqueue('caique')
q.enqueue('isabella')
q.enqueue('thomas')
q.enqueue('igor')
console.log(q.toString())
console.log(q.peek())

