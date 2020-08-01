const automovel = {}

Object.defineProperties(automovel, {
  nome: {
    value: 'auto',
    writable: true,
    configurable: true,
    enumerable: true
  },
  acelerar: {
    get() {
      return function () {
        return `vruummmm ${this.nome}`
      }
    }
  }
})

const carro = Object.defineProperties({}, {
  // nome: {
  //   set(nome) {
  //     this._nome = nome
  //   },
  //   get() {
  //     return this._nome
  //   }
  // }
})

Object.setPrototypeOf(carro, automovel)


function NovoCarro(nome) {
  const obj = Object.create(carro)
  obj.nome = nome
  return obj
}

const c = new NovoCarro('ferrari')
console.log(c.acelerar())