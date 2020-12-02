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
    return privates.get(this).tail - privates.get(this).first
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

  enqueue(element) {
    const p = privates.get(this)
    p.items[p.tail] = element
    p.tail++
    return this.size()
  }

  peek() {
    if (this.isEmpty()) return undefined
    const p = privates.get(this)
    return p.items[p.first]
  }

  dequeue() {
    if (this.isEmpty()) return false
    const p = privates.get(this)
    const element = p.items[p.first]
    delete p.items[p.first]
    p.first++
    return element
  }

  toString() {
    if (this.isEmpty()) return ''
    const p = privates.get(this)
    let queue = p.items[p.first]
    for (let i = 1; i < this.size(); i++) {
      queue = `${queue}, ${p.items[i]}`
    }
    return queue
  }
}

const q = new Queue
console.log(q.enqueue('caique'))
q.enqueue('thomas')
console.log(q.peek())