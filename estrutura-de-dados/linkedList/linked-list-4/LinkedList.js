const Node = require('./Node')
const { defaultEquals } = require('./defaultEquals')()

function Linkedlist(equalsFn = defaultEquals) {
  this.equalsFn = equalsFn
  this.count = 0
  this.head = undefined
}

Linkedlist.prototype.size = function () {
  return this.count
}

Linkedlist.prototype.isEmpty = function () {
  return this.size() === 0
}

Linkedlist.prototype.push = function (element) {
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

Linkedlist.prototype.getElementAt = function (index) {
  if (index >= 0 && index < this.count) {
    let current = this.head
    if (index === 0) {
      return current
    } else {
      for (let i = 0; i < index; i++) {
        current = current.next
      }
      return current
    }
  }
  return undefined
}

Linkedlist.prototype.removeAt = function (index) {
  if (index >= 0 && index < this.count) {
    let current = this.head
    if (index === 0) {
      current = this.head
    } else {
      let previus
      for (let i = 0; i < index; i++) {
        previus = current
        current = current.next
      }
      previus.next = current.next
    }
    return current
  } else {
    return false
  }
}

const l = new Linkedlist
l.push('caique')
l.push('thomas')
console.log(l.removeAt(1))