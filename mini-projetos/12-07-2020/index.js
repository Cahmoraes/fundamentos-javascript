const path = require('path')
const { isArray } = require('util')
const fn = require('./funcoes')()
const pathDir = path.resolve(__dirname, '../shared')

const parseToNumbers = objects => {
  objects.forEach(object => {
    for (const [key, value] of Object.entries(object)) {
      object[key] = (!isNaN(parseInt(value, 10))) ? parseInt(value, 10) : value
    }
  })
  return objects
}

const capitalizeStrings = objects => {
  objects[0].forEach(object => {
    for (const [key, value] of Object.entries(object)) {
      object[key] = (typeof value === 'string') ? value.trim().capitalize() : value
      if (isArray(value)) {
        value.forEach((v, i) => {
          value[i] = (typeof v === 'string') ? v.trim().capitalize() : v
        })
      }
    }
  })
  return objects
}

const createPessoa = obj => fn.novo(fn.Pessoa, ...Object.values(obj))
const createPessoas = objs => objs.map(createPessoa)

const handlePessoa = dados => {
  dados[0] = createPessoas(dados[0])
  return dados
}

fn.readDir(pathDir)
  .then(fn.concatPathFile(pathDir))
  .then(fn.readFiles)
  .then(fn.parseToObjects)
  .then(parseToNumbers)
  .then(capitalizeStrings)
  .then(handlePessoa)
  .then(console.log)