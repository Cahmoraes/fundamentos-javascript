const privates = new WeakMap

function Stack() {
  const me = {
    count: 0,
    items: {}
  }
  privates.set(this, me)
}

Stack.prototype.size = function () {
  return privates.get(this).count
}

Stack.prototype.isEmpty = function () {
  return this.size() === 0
}

Stack.prototype.clear = function () {
  const p = privates.get(this)
  p.items = {}
  p.count = 0
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
  const element = p.items[p.count - 1]
  delete p.items[p.count - 1]
  p.count--
  return element
}

Stack.prototype.peek = function () {
  const p = privates.get(this)
  return p.items[p.count - 1]
}

Stack.prototype.toString = function () {
  if (this.isEmpty()) return undefined
  const p = privates.get(this)
  let stack = p.items[0]
  for (let i = 1; i < this.size(); i++) {
    stack = `${stack}, ${p.items[i]}`
  }
  return stack
}

const s = new Stack
console.log(s.push('caique'))
console.log(s.push('thomas'))
console.log(s.push('isabella'))
console.log(s.pop())
console.log(s.pop())
console.log(s.push('igor'))
console.log(s.toString())

