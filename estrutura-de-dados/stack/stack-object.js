const privates = new WeakMap()

const novo = (fn, ...argumentos) => {
  const obj = Object.create(fn.prototype)
  Reflect.apply(fn, obj, argumentos)
  return obj
}

function Stack() {
  const me = {
    count: 0,
    items: {}
  }
  privates.set(this, me)
}

Stack.prototype.isEmpty = function () {
  return privates.get(this).count === 0
}

Stack.prototype.size = function () {
  return privates.get(this).count
}

Stack.prototype.push = function (elemento) {
  const s = privates.get(this)
  s.items[s.count] = elemento
  s.count++
  return this.size()
}

Stack.prototype.pop = function () {
  if (this.isEmpty()) return undefined
  const s = privates.get(this)
  const frame = s.items[s.count - 1]
  delete s.items[s.count - 1]
  s.count--
  return frame
}

Stack.prototype.peek = function () {
  if (this.isEmpty()) return undefined
  return privates.get(this).items[privates.get(this).count - 1]
}

Stack.prototype.toString = function () {
  if (this.isEmpty()) return ''
  const s = privates.get(this)
  let frames = s.items[0]
  for (let i = 1; i < this.size(); i++) {
    frames = `${frames}, ${s.items[i]}`
  }
  return frames
}

const st = novo(Stack)
console.log(st.size())
console.log(st.push('caique'))
console.log(st.push('thomas'))
console.log(st.toString())
