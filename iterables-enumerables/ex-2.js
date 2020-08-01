// const obj = Object.defineProperties({}, {
//   nome: {
//     value: 'caique',
//     writable: true,
//     configurable: false,
//     enumerable: true
//   },
//   idade: {
//     value: 26,
//     enumerable: true,
//     configurable: true
//   },
//   option: {
//     set(valor) {
//       this._option = valor
//     },
//     get() {
//       return this._option
//     }
//   }
// })

// delete obj.nome
// obj.option = 'opcao definida'
// console.log(obj.option)


// for (const prop in obj) {
//   console.log(prop, obj[prop])
// }

// Object.defineProperty(obj, 'profissao', {
//   value: 'Programador',
//   enumerable: true
// })

// console.log(obj)

// Object.freeze(Object.seal(obj))
// obj.nome = 'tho'
// delete obj.idade
// console.log(obj)


class Pessoa {
  constructor(nome, idade) {
    this.nome = nome
    this.idade = idade
    Object.seal(this)
  }
}

const p = new Pessoa('caique', 26)
// console.log(p)

for (const item in p) {
  console.log(item)
}


// const nomes = ['caique', 'thomas', 'isabella', 'igor']

// for (const nome of nomes) {
//   console.log(nome)
// }

const objP = {
  nome: 'caique',
  idade: 26
}

for (const prop in Object.keys(objP)) {
  // console.log(Object.keys(objP))
}
// console.log(Object.entries(objP))