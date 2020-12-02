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

  getHead() {
    return privates.get(this).head
  }

  size() {
    return privates.get(this).count
  }

  isEmpty() {
    return this.size() === 0
  }

  setHead(node) {
    privates.get(this).head = node
    return this.getHead()
  }

  isEquals(elementA, elementB) {
    return privates.get(this).equalsFn(elementA, elementB)
  }

  enCount() {
    return privates.get(this).count = privates.get(this).count + 1
  }

  deCount() {
    if (privates.get(this).count > 0) {
      return privates.get(this).count = privates.get(this).count - 1
    } else {
      return privates.get(this).count = 0
    }
  }

  push(element) {
    const node = new Node(element)
    let current = this.getHead()
    if (current === undefined) {
      this.setHead(node)
    } else {
      while (current.next !== undefined) current = current.next
      current.next = node
    }
    return this.enCount()
  }

  getElementAt(index) {
    if (index >= 0 && index < this.size()) {
      let current = this.getHead()
      if (index === 0) {
        return current
      } else {
        for (let i = 0; i < index; i++) {
          current = current.next
        }
      }
      return current
    }
    return undefined
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

  insertAt(element, index) {
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
      return true
    } else {
      return false
    }
  }

  indexOf(element) {
    let current = this.getHead()
    for (let i = 0; i < this.size() && current !== undefined; i++) {
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
    let linkedList = this.getHead().element
    let current = this.getHead().next
    for (let i = 1; i < this.size() && current !== undefined; i++) {
      linkedList = `${linkedList}, ${current.element}`
      current = current.next
    }
    return linkedList
  }
}

const linked = new LinkedList
linked.push('caique')
linked.push('isabella')
linked.insertAt('thomas', 2)
linked.removeAt(1)
linked.removeAt(1)
linked.removeAt(1)
linked.removeAt(1)
console.log(linked.removeAt(1))