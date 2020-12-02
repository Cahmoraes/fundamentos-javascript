const Node = require('./Node')
const defaultEquals = require('./defaultEquals')

class LinkedList {
  constructor(equalsfn = defaultEquals) {
    this.head = undefined
    this.count = 0
    this.equalsfn = equalsfn
  }

  size() {
    return this.count
  }

  isEmpty() {
    return this.size() === 0
  }

  clear() {
    this.head = undefined
    this.count = 0
  }

  insert(element) {
    const node = new Node(element)
    if (this.head === undefined) {
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
      let current = this.head
      if (index === 0) {
        return current
      } else {
        let previous
        for (let i = 0; i < index; i++) {
          previous = current
          current = current.next
        }
        return current
      }
    } else {
      return undefined
    }
  }

  removeAt(index) {
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
      return current
    } else {
      return false
    }
  }

  insertElementAt(element, index) {
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
      return this.size()
    } else {
      return false
    }
  }

  indexOf(element) {
    let current = this.head
    for (let i = 0; i < this.size() && current != undefined; i++) {
      if (this.equalsfn(element, current.element)) {
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
    let list = this.head.element
    let current = this.head.next
    while (current !== undefined) {
      list = `${list}, ${current.element}`
      current = current.next
    }
    return list
  }
}

const l = new LinkedList
l.insert('caique')
l.insert('thomas')
l.insert('isabella')
console.log(l.insertElementAt('igor', 3))
console.log(l.getElementAt(3))
console.log(l.indexOf('thomas'))
console.log(l.toString())