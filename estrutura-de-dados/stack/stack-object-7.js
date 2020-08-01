const privates = new WeakMap()

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

Stack.prototype.push = function (elemento) {
  const p = privates.get(this)
  p.items[p.count] = elemento
  p.count++
  return this.size()
}

Stack.prototype.pop = function () {
  if (this.isEmpty()) return undefined
  const p = privates.get(this)
  const elemento = p.items[p.count - 1]
  delete p.items[p.count - 1]
  p.count--
  return elemento
}

Stack.prototype.peek = function () {
  if (this.isEmpty()) return undefined
  const p = privates.get(this)
  return p.items[p.count - 1]
}

Stack.prototype.toString = function () {
  if (this.isEmpty()) return ''
  const p = privates.get(this)
  let frame = p.items[0]
  for (let i = 1; i < this.size(); i++) {
    frame = `${frame}, ${p.items[i]}`
  }
  return frame
}

const s = new Stack()
s.push('caique')
s.push('thomas')
s.push('isabella')
s.push('igor')
console.log(s.toString())