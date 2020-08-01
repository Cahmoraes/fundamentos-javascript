
const items = new WeakMap()
class Stack {
  constructor() {
    this.count = 0
    items.set(this, {})
  }

  push(elemento) {
    const s = items.get(this)
    s[this.count] = elemento
    this.count++
  }

  pop() {
    console.log(items.get(this))
    if (this.isEmpty()) return undefined
    const s = items.get(this)
    const item = s[this.count - 1]
    this.count--
    return item
  }

  peek() {
    if (this.isEmpty()) return undefined
    const s = items.get(this)
    return s[this.count - 1]
  }

  isEmpty() {
    return this.count === 0
  }

  size() {
    return this.count
  }

  clear() {
    items.delete(this)
    items.set(this, {})
    this.count = 0
  }

  toString() {
    if (this.isEmpty()) return ''
    const s = items.get(this)
    let object = s[0]
    for (let i = 1; i < this.size(); i++) {
      object = `${object}, ${s[i]}`
    }
    return object
  }
}

const stack = new Stack()
stack.push('caique')
stack.push('thomas')
stack.clear()
console.log(stack.peek())
stack.push('thomas')
stack.push('caique')
console.log(stack.peek())
console.log(stack.size())
console.log(stack.toString())

