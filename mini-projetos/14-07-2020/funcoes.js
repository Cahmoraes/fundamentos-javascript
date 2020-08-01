// const path = require('path')
const fs = require('fs')

// const url = path.resolve(__dirname, '../shared')

const readDir = path => new Promise((resolve, reject) => {
  fs.readdir(path, { encoding: 'utf-8' }, (error, files) => {
    if (error) reject(error)
    resolve(files)
  })
})

const readFile = pathFile => new Promise((resolve, reject) => {
  fs.readFile(pathFile, (error, conteudo) => {
    if (error) reject(error)
    resolve(conteudo.toString())
  })
})
const readFiles = path => files => files.map(file => readFile(path.concat(`\\${file}`)))
const resolveAllFiles = arrPromises => Promise.all(arrPromises)
const toObject = dado => JSON.parse(dado)
const parseDados = dados => dados.map(toObject)

const sequence = Object.defineProperties({}, {
  id: {
    value: 1,
    enumerable: true,
    writable: true,
    configurable: true
  },
  getId: {
    value: function () {
      return this.id++
    }
  }
})

function Pessoa(nome = '', sobrenome = '', idade = 0, hobbies = [], profissao = '', sexo = '') {
  this.id = sequence.getId()
  this.nome = nome
  this.sobrenome = sobrenome
  this.idade = idade
  this.hobbies = hobbies
  this.profissao = profissao
  this.sexo = sexo
}

const novo = (fn, ...args) => {
  const obj = Object.create(fn.prototype)
  Reflect.apply(fn, obj, args)
  return obj
}

const criarPessoa = dado => novo(Pessoa, ...Object.values(dado))
const cirarPessoas = dados => {
  dados[0] = dados[0].map(criarPessoa)
  console.log(dados[0][0] instanceof Pessoa)
  return dados
}

module.exports = () => {
  return {
    readDir,
    readFiles,
    resolveAllFiles,
    parseDados,
    cirarPessoas
  }
}