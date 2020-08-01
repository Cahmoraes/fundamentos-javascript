const path = require('path')
const fn = require('./function')()
const pathFiles = path.resolve(__dirname, '../shared')

const maisVelho = pessoas => {
  const maisVelho = pessoas[0].reduce((acc, pessoa) => {
    return (acc.idade > pessoa.idade) ? acc : pessoa
  })
  console.log(`O mais velho é ${maisVelho.nome} com ${maisVelho.idade}`)
  return pessoas
}

fn.readDir(pathFiles)
  .then(fn.readFiles(pathFiles))
  .then(fn.parseArrayToJson)
  .then(fn.createPessoas)
  .then(maisVelho)
  .then(console.log)