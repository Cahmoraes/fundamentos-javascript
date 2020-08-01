const privates = new WeakMap()

class Stack {

  constructor() {
    const me = new Object({
      count: 0,
      items: {}
    })
    privates.set(this, me)
  }

  size() {
    return privates.get(this).count
  }

  isEmpty() {
    return this.size() === 0
  }

  push(elemento) {
    if (!elemento) throw new Error('Não pode inserir vazio')
    const p = privates.get(this)
    p.items[p.count] = elemento
    p.count++
    return this.size()
  }

  pop() {
    if (this.isEmpty()) return 'nada'
    const p = privates.get(this)
    const frame = p.items[p.count - 1]
    p.count--
    return frame
  }

  peek() {
    if (this.isEmpty()) return undefined
    const p = privates.get(this)
    return p.items[p.count - 1]
  }

  toString() {
    if (this.isEmpty()) return ''
    const p = privates.get(this)
    let frame = p.items[0]
    for (let i = 1; i < this.size(); i++) {
      frame = `${frame}, ${p.items[i]}`
    }
    return frame
  }

}

const s = new Stack
s.push('caique')
s.push('thomas')
console.log(s.toString())
