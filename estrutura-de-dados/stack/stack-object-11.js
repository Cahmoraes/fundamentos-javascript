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
    return privates.get(this).count
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
    return privates.get(this).items[privates.get(this).count - 1]
  }

  clear() {
    const p = privates.get(this)
    p.count = 0
    p.items = {}
  }

  toString() {
    if (this.isEmpty()) return ''
    const p = privates.get(this)
    let stack = p.items[0]
    for (let i = 1; i < this.size(); i++) {
      stack = `${stack}, ${p.items[i]}`
    }
    return stack
  }
}

const s = new Stack
s.push('caique')
s.push('thomas')
s.push('isabella')
s.push('igor')
console.log(s.toString())