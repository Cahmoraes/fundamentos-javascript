const Node = require('./Node')
const defaultEquals = require('./defaultEquals')

const privates = new WeakMap

class LinkedList {
  constructor(equalsFn = defaultEquals) {
    const me = new Object({
      count: 0,
      head: undefined,
      equalsFn
    })
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

  push(element) {
    const node = new Node(element)
    let current = this.getHead()
    if (this.isEmpty()) {
      node.next = current
      this.setHead(node)
    } else {
      while (current.next !== undefined) current = current.next
      current.next = node
    }
    this.enCount()
    return this.size()
  }

  getElementAt(index) {
    if (index >= 0 && index < this.size()) {
      if (index === 0) {
        return this.getHead()
      } else {
        let node = this.getHead()
        for (let i = 0; i < index; i++) {
          node = node.next
        }
        return node
      }
    }
    return undefined
  }

  removeElementAt(index) {
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

  insertElementAt(element, index) {
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

  indeOf(element) {
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
    const index = this.indeOf(element)
    return !!this.removeElementAt(index)
  }

  clear(equalsFn = defaultEquals) {
    const p = privates.get(this)
    p.count = 0
    p.head = undefined
    p.equalsFn = equalsFn
  }

  toString() {
    if (this.isEmpty()) return ''
    let list = this.getHead().element
    let current = this.getHead().next
    while (current !== undefined) {
      list = `${list}, ${current.element}`
      current = current.next
    }
    return list
  }
}

const linked = new LinkedList
linked.push('caique')
linked.push('thomas')
linked.push('isabella')
console.log(linked.insertElementAt('igor', 2))
console.log(linked.indeOf('igor'))
console.log(linked.toString())