// enumerable

const myObj = Object.defineProperties({}, {
  nome: {
    value: 'caique',
    enumerable: true
  },
  idade: {
    value: 26
  }
})

Object.defineProperty(myObj, ['profissao'], {
  value: 'Entusiasta do universo',
  enumerable: true
})

for (const prop in myObj) {
  console.log(myObj[prop])
}