const defaultEquals = require('./defaultEquals')
const Node = require('./Node')

class LinkedList {
  constructor(equalsFn = defaultEquals) {
    this.equalsFn = equalsFn
    this.head = undefined
    this.count = 0
  }

  size() {
    return this.count
  }

  isEmpty() {
    return this.size() === 0
  }

  clear(equalsFn = defaultEquals) {
    this.head = undefined
    this.count = 0
    this.equalsFn = equalsFn
  }

  insertElement(element) {
    const node = new Node(element)
    if (this.isEmpty()) {
      this.head = node
    } else {
      let current = this.head
      while (current.next !== undefined) current = current.next
      current.next = node
    }
    this.count++
    return this.size()
  }

  getElementAt(index) {
    if (index >= 0 && index < this.count) {
      if (index === 0) {
        return this.head
      }
      let current = this.head
      for (let i = 0; i < index; i++) {
        current = current.next
      }
      return current
    }
    return undefined
  }

  removeElementAt(index) {
    if (index >= 0 && index < this.count) {
      let current = this.head
      if (index === 0) {
        this.head = this.head.next
      } else {
        const previous = this.getElementAt(index - 1)
        current = previous.next
        previous.next = current.next
      }
      this.count--
      return current
    }
    return false
  }

  inserElementAt(element, index) {
    if (index >= 0 && index <= this.count) {
      const node = new Node(element)
      let current = this.head
      if (index === 0) {
        this.head = node
        node.next = current
      } else {
        const previous = this.getElementAt(index - 1)
        current = previous.next
        previous.next = node
        node.next = current
      }
      this.count++
      return this.size()
    } else {
      return false
    }
  }

  indexOf(element) {
    let current = this.head
    for (let i = 0; i < this.count && current !== undefined; i++) {
      if (this.equalsFn(element, current.element)) {
        return i
      }
      current = current.next
    }
    return -1
  }

  removeElement(element) {
    if (this.isEmpty()) return false
    const index = this.indexOf(element)
    return !!this.removeElementAt(index)
  }

  toString() {
    if (this.isEmpty()) return ''
    let list = this.head.element
    let current = this.head.next
    while (current !== undefined) {
      list = `${list}, ${current.element}`
      current = current.next
    }
    return list
  }
}

const l = new LinkedList()
l.insertElement('caique')
l.insertElement('thomas')
l.inserElementAt('igor', 2)
console.log(l.indexOf('igor'))
l.insertElement('isabella')
console.log(l.toString())
// console.log(l.head)