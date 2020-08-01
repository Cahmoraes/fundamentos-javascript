const privates = new WeakMap()

class Stack {
  constructor() {
    const me = {
      count: 0,
      items: {}
    }
    privates.set(this, me)
  }

  push(element) {
    const s = privates.get(this)
    s.items[s.count] = element
    s.count++
  }

  pop() {
    if (this.isEmpty()) return undefined
    const s = privates.get(this)
    const element = s.items[s.count - 1]
    s.count--
    return element
  }

  size() {
    return privates.get(this).count
  }

  isEmpty() {
    return privates.get(this).count === 0
  }

  peek() {
    if (this.isEmpty()) return undefined
    return privates.get(this).items[privates.get(this).count - 1]
  }

  clear() {
    const s = privates.get(this)
    s.items = {}
    s.count = 0
  }

  toString() {
    if (this.isEmpty()) return ''
    const s = privates.get(this)
    let trace = s.items[0]
    for (let i = 1; i < this.size(); i++) {
      trace = `${trace}, ${s.items[i]}`
    }
    return trace
  }
}

function decimalToBinary(decNumber) {
  const remStack = new Stack
  let number = decNumber
  let rem
  let binaryString = ''
  while (number > 0) {
    rem = Math.floor(number % 2)
    console.log('rem: ', rem)
    remStack.push(rem)
    number = Math.floor(number / 2)
    console.log('number: ', number)
  }
  while (!remStack.isEmpty()) {
    binaryString += remStack.pop().toString()
  }
  return binaryString
}
console.log(decimalToBinary(10))