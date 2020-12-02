const Node = require('./Node')
const defaultEquals = require('./defaultEquals')


function LinkedList(equalFn = defaultEquals) {
  this.equalFn = equalFn
  this.head = undefined
  this.count = 0
}

LinkedList.prototype.size = function () {
  return this.count
}

LinkedList.prototype.isEmpty = function () {
  return this.size() === 0
}

LinkedList.prototype.push = function (element) {
  const node = new Node(element)
  if (this.head === undefined) {
    this.head = node
  } else {
    let current = this.head
    while (current.next !== undefined) current = current.next
    current.next = node
  }
  this.count++
}

LinkedList.prototype.getElementAt = function (index) {
  if (index >= 0 && index < this.count) {
    if (index === 0) {
      return this.head
    } else {
      let current = this.head
      for (let i = 0; i < index; i++) {
        current = current.next
      }
      return current
    }
  }
  return undefined
}

LinkedList.prototype.removeAt = function (index) {
  if (index >= 0 && index < this.count) {
    let current = this.head
    if (index === 0) {
      this.head = current.next
    } else {
      const previous = this.getElementAt(index - 1)
      current = previous.next
      previous.next = current.next
    }
    this.count--
    return current.element
  }
  return false
}

LinkedList.prototype.insertAt = function (element, index) {
  const node = new Node(element)
  if (index >= 0 && index <= this.count) {
    let current = this.head
    if (index === 0) {
      node.next = current
      this.head = node
    } else {
      const previous = this.getElementAt(index - 1)
      current = previous.next
      previous.next = node
      node.next = current
    }
    this.count++
    return this.count
  }
  return false
}

LinkedList.prototype.indexOf = function (element) {
  let current = this.head
  for (let i = 0; i < this.count && current !== undefined; i++) {
    if (this.equalFn(current.element, element)) {
      return i
    }
    current = current.next
  }
  return -1
}

LinkedList.prototype.remove = function (element) {
  const index = this.indexOf(element)
  return !!this.removeAt(index)
}

LinkedList.prototype.toString = function () {
  if (this.isEmpty()) return ''
  let list = this.head.element
  let current = this.head.next
  for (let i = 1; i < this.count; i++) {
    list = `${list}, ${current.element}`
    current = current.next
  }
  return list
}


const l = new LinkedList
l.push('caique')
// l.push('thomas')
// console.log(l.insertAt('igor', 1))
console.log(l.toString())
