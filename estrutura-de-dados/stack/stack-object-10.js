const privates = new WeakMap

class Stack {
  constructor() {
    const me = new Object({
      count: 0,
      items: {}
    })
    privates.set(this, me)
  }

  size() {
    const p = privates.get(this)
    return p.count
  }

  isEmpty() {
    return this.size() === 0
  }

  push(elemento) {
    const p = privates.get(this)
    p.items[p.count] = elemento
    p.count++
    return this.size()
  }

  pop() {
    if (this.isEmpty()) return undefined
    const p = privates.get(this)
    const frame = p.items[p.count - 1]
    delete p.items[p.count - 1]
    p.count--
    return frame
  }

  peek() {
    if (this.isEmpty()) return undefined
    const p = privates.get(this)
    return p.items[p.count - 1]
  }

  clear() {
    const p = privates.get(this)
    p.count = 0
    p.items = {}
  }

  toString() {
    if (this.isEmpty()) return ''
    const p = privates.get(this)
    let frame = p.items[0]
    for (let i = 1; i < this.size(); i++) {
      frame = `${frame}, ${p.items[i]}`
    }
    return frame
  }
}

const s = new Stack
s.push('caique')
s.push('thomas')
console.log(s.toString())