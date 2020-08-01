class Stack {
  constructor() {
    this.count = 0
    this.items = {}
  }

  push(elemento) {
    this.items[this.count++] = elemento
    return this.size()
  }

  pop() {
    if (this.isEmpty()) return undefined
    this.count--
    const elemento = this.items[this.count]
    delete this.items[this.count]
    return elemento
  }

  peek() {
    if (this.isEmpty()) return undefined
    return this.items[this.count - 1]
  }

  size() {
    return this.count
  }

  isEmpty() {
    return this.count === 0
  }

  clear() {
    while (!this.isEmpty()) {
      this.pop()
    }
  }

  toString() {
    if (this.isEmpty()) return ''
    let objElement = this.items[0]
    for (let i = 1; i < this.size(); i++) {
      objElement = `${objElement}, ${this.items[i]}`
    }
    return objElement
  }
}

const stack = new Stack()
stack.push(1)
stack.push(2)
stack.push(3)
console.log(stack.toString())
