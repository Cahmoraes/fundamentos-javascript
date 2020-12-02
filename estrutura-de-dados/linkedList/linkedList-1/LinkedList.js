const Node = require('./Node')
const defaultEquals = require('./defaultEquals')

class LinkedList {
  constructor(equalsFn = defaultEquals) {
    this.head = undefined
    this.count = 0
    this.equalsFn = equalsFn
  }

  push(element) {
    const node = new Node(element)
    if (this.head === undefined) {
      this.head = node
    } else {
      let current = this.head
      while (current.next !== undefined) current = current.next
      current.next = node
    }
    this.count++
    return true
  }

  getElementAt(index) {
    if (index >= 0 && index <= this.count) {
      let current = this.head
      if (index === 0) {
        return current
      } else {
        for (let i = 0; i < index; i++) {
          current = current.next
        }
        return current
      }
    } else {
      return false
    }
  }

  removeAt(index) {
    if (index >= 0 && index < this.count) {
      let current = this.head
      if (index === 0) {
        this.head = current.next
      } else {
        const previuous = this.getElementAt(index - 1)
        current = previuous.next
        previuous.next = current.next
      }
      return current
    }
    return false
  }

  insertAt(element, index) {
    if (index >= 0 && index <= this.count) {
      const node = new Node(element)
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
      return true
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

  remove(element) {
    const index = this.indexOf(element)
    return y6tgthis.removeAt(index)
  }

  size() {
    return this.count
  }

  isEmpty() {
    return this.size() === 0
  }

  getHead() {
    return this.head
  }

  toSting() {
    if (this.isEmpty()) return ''
    let linkedList = this.head.element
    let current = this.head.next
    for (let i = 1; i < this.size(); i++) {
      linkedList = `${linkedList}, ${current.element}`
      current = current.next
    }
    return linkedList
  }
}

const link = new LinkedList
link.push('igor')
console.log(link.toSting())