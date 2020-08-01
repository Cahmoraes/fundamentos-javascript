const privates = new WeakMap()

function Stack() {
  const me = {
    count: 0,
    items: {},
    getValue() {
      return { nome: 'Success' }
    }
  }
  privates.set(this, me)
}

Stack.prototype.size = function () {
  return privates.get(this).count
}

Stack.prototype.isEmpty = function () {
  return privates.get(this).count === 0
}

Stack.prototype.push = function (elemento) {
  const p = privates.get(this)
  p.items[p.count] = elemento
  p.count++
}

Stack.prototype.peek = function () {
  if (this.isEmpty()) return undefined
  return privates.get(this).items[privates.get(this).count - 1]
}

Stack.prototype.pop = function () {
  if (this.isEmpty()) return undefined
  const p = privates.get(this)
  const el = p.items[p.count - 1]
  delete p.items[p.count - 1]
  p.count--
  return el
}

Stack.prototype.clear = function () {
  privates.get(this).items = {}
  privates.get(this).count = 0
}

Stack.prototype.toString = function () {
  if (this.isEmpty()) return ''
  const p = privates.get(this)
  let object = p.items[0]
  for (let i = 1; i < this.size(); i++) {
    object = `${object}, ${p.items[i]}`
  }
  return object
}

Stack.prototype.succsess = function () {
  return privates.get(this).getValue()
}

const s = new Stack()
s.push('caique')
s.push('thomas')
console.log(s.peek())
console.log(s.size())
console.log(s.toString())
console.log(s.succsess())