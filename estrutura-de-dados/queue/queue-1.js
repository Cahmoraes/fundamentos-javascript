const privates = new WeakMap()

class Queue {
  constructor() {
    const me = {
      count: 0,
      lowestCount: 0,
      items: {}
    }
    privates.set(this, me)
  }

  isEmpty() {
    return this.size() === 0
  }

  size() {
    const q = privates.get(this)
    return q.count - q.lowestCount
  }

  enqueue(elemento) {
    const q = privates.get(this)
    q.items[q.count] = elemento
    q.count++
    return this.size()
  }

  peek() {
    if (this.isEmpty()) return undefined
    const q = privates.get(this)
    return q.items[q.lowestCount]
  }

  dequeue() {
    if (this.isEmpty()) return undefined
    const q = privates.get(this)
    const elemento = q.items[q.lowestCount]
    delete q.items[q.lowestCount]
    q.lowestCount++
    return elemento
  }

  clear() {
    const q = privates.get(this)
    q.items = {}
    q.count = 0
    q.lowestCount = 0
  }

  toString() {
    if (this.isEmpty()) return ''
    const q = privates.get(this)
    let queue = q.items[q.lowestCount]
    for (let i = q.lowestCount + 1; i < this.size(); i++) {
      queue = `${queue}, ${q.items[i]}`
    }
    return queue
  }
}

const q = new Queue()
console.log(q.enqueue('caique'))
console.log(q.enqueue('thomas'))
console.log(q.peek())
console.log(q.toString())