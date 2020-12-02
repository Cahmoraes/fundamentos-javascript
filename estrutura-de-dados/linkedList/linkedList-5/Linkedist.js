const Node = require('./Node')
const defaultEquals = require('./defaultEquals')

const privates = new WeakMap

class LinkedList {
  constructor(equalsFn = defaultEquals) {
    const me = {
      head: undefined,
      count: 0,
      equalsFn
    }
    privates.set(this, me)
  }

  size() {
    return privates.get(this).count
  }

  isEmpty() {
    return this.size() === 0
  }

  getHead() {
    return privates.get(this).head
  }

  setHead(node) {
    return privates.get(this).head = node
  }

  enCount() {
    return privates.get(this).count += 1
  }

  deCount() {
    if (this.isEmpty()) return 0
    return privates.get(this).count -= 1
  }

  isEquals(elementA, elementB) {
    return privates.get(this).equalsFn(elementA, elementB)
  }

  getElementAt(index) {
    if (index >= 0 && index < this.size()) {
      let node = this.getHead()
      if (index === 0) {
        return node
      } else {
        for (let i = 0; i < index; i++) {
          node = node.next
        }
        return node
      }
    }
    return undefined
  }

  push(element) {
    const node = new Node(element)
    if (this.isEmpty()) {
      this.setHead(node)
    } else {
      let current = this.getHead()
      while (current.next !== undefined) current = current.next
      current.next = node
    }
    this.enCount()
    return this.size()
  }

  removeAt(index) {
    if (index >= 0 && index < this.size()) {
      let current = this.getHead()
      if (index === 0) {
        this.setHead(current.next)
      } else {
        const previous = this.getElementAt(index - 1)
        current = previous.next
        previous.next = current.next
      }
      this.deCount()
      return current
    }
    return false
  }

  isertAt(element, index) {
    if (index >= 0 && index <= this.size()) {
      const node = new Node(element)
      let current = this.getHead()
      if (index === 0) {
        node.next = current
        this.setHead(node)
      } else {
        const previous = this.getElementAt(index - 1)
        current = previous.next
        previous.next = node
        node.next = current
      }
      this.enCount()
      return this.size()
    }
    return false
  }

  indexOf(element) {
    let current = this.getHead()
    for (let i = 0; i < this.size() && current != null; i++) {
      if (this.isEquals(element, current.element)) {
        return i
      }
      current = current.next
    }
    return -1
  }

  remove(element) {
    const index = this.indexOf(element)
    return !!this.removeAt(index)
  }

  toString() {
    if (this.isEmpty()) return ''
    let list = this.getHead().element
    let current = this.getHead().next
    for (let i = 1; i < this.size() && current !== undefined; i++) {
      list = `${list}, ${current.element}`
      current = current.next
    }
    return list
  }
}

module.exports = LinkedList