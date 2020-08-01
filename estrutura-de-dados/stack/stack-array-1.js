class Stack {
  constructor() {
    this._items = []
  }

  push(...elements) {
    this._items.push(...elements)
  }

  pop() {
    return this._items.pop()
  }

  peek() {
    return this._items[this._items.length - 1]
  }

  isEmpty() {
    return this._items.length === 0
  }

  size() {
    return this._items.length
  }

  clear() {
    this._items = []
  }
}

const myStack = new Stack()
myStack.push(1, 2, 3, 4, 5)
console.log(myStack.peek())
console.log(myStack.pop())
console.log(myStack.peek())
console.log(myStack.size())
myStack.clear()
console.log(myStack.size())
