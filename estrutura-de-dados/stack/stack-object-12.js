const privates = new WeakMap

function Stack() {
  const me = new Object({
    count: 0,
    items: {}
  })
  privates.set(this, me)
}

Stack.prototype.size = function () {
  return privates.get(this).count
}

Stack.prototype.isEmpty = function () {
  return this.size() === 0
}

Stack.prototype.push = function (element) {
  const p = privates.get(this)
  p.items[p.count] = element
  p.count++
  return this.size()
}

Stack.prototype.pop = function () {
  if (this.isEmpty()) return undefined
  const p = privates.get(this)
  const frame = p.items[p.count - 1]
  delete p.items[p.count - 1]
  return frame
}

Stack.prototype.peek = function () {
  if (this.isEmpty()) return undefined
  const p = privates.get(this)
  console.log(p.items)
  return p.items[p.count - 1]
}

Stack.prototype.toString = function () {
  if (this.isEmpty()) return ''
  const p = privates.get(this)
  let stack = p.items[0]
  for (let i = 1; i < this.size(); i++) {
    stack = `${stack}, ${p.items[i]}`
  }
  return stack
}

Stack.prototype.clear = function () {
  const p = privates.get(this)
  p.count = 0
  p.items = {}
}

const s = new Stack
console.log(s.push('caique'))
console.log(s.push('thomas'))
console.log(s.toString())
s.clear()
console.log(s.isEmpty())
