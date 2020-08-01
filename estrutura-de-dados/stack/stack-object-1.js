class Stack {
  constructor() {
    this.count = 0
    this.items = {}
  }

  push(element) {
    this.items[this.count++] = element
  }

  pop() {
    const ultimo = this.count - 1
    const pop = this.items[ultimo]
    delete this.items[ultimo]
    this.count--
    return pop
  }

  peek() {
    const ultimo = this.count - 1
    return this.items[ultimo]
  }

  size() {
    return this.count
  }

  isEmpty() {
    console.log(Object.keys(this.items).length)
    return Object.keys(this.items).length === 0
  }

  clear() {
    this.items = {}
  }
}

const myStack = new Stack()
myStack.push('caique')
myStack.push('thomas')
console.log(myStack)
console.log(myStack.pop())
console.log(myStack)
myStack.push('thomas')
console.log(myStack)
console.log(myStack.peek())
console.log(myStack.pop())
console.log(myStack.size())
console.log(myStack.isEmpty())
myStack.clear()
console.log(myStack.isEmpty())
