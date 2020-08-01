enumerable

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

const irmaos = ['caique', 'isabella', 'thomas', 'igor']
console.time('This Time')
for (const value of irmaos) {
  console.log(value)
}

for (let i = 0; i < irmaos.length; i++) {
  console.log(irmaos[i])
}
console.timeEnd('This Time')