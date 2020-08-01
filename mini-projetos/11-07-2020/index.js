const path = require('path')
const { type } = require('os')
const funcoes = require('./funcoes')()

const file = '../shared/dados.json'
const url = path.resolve(__dirname, file)



const toInt = dados => {
  dados.forEach(dado => dado.idade = parseInt(dado.idade))
  return dados
}

// const capitalize = string => string.charAt(0).toUpperCase() + string.slice(1)

const capitalizeAllStrings = data => {
  data.forEach(el => {
    for (const [key, value] of Object.entries(el)) {
      if (typeof value === 'string') {
        el[key] = value.capitalize()
      } else if (Array.isArray(el[key])) {
        el[key] = el[key].map(e => e.capitalize())
      }
    }
  })
  return data
}


funcoes.lerDados(url)
  .then(funcoes.toJson)
  .then(funcoes.createPessoas)
  .then(toInt)
  .then(capitalizeAllStrings)
  .then(console.log)