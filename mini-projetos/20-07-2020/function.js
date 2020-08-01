const fs = require('fs')
const path = require('path')

const dir = path.resolve(__dirname, '../shared')

const readDir = path => new Promise((resolve, reject) => {
  fs.readdir(path, (error, files) => {
    if (error) reject(error)
    resolve(files.map(resolvePath(path)))
  })
})

const resolvePath = path => file => path.concat('\\' + file)

const readFile = pathDir => new Promise((resolve, reject) => {
  fs.readFile(pathDir, (error, conteudo) => {
    if (error) reject(error)
    resolve(conteudo.toString())
  })
})

const readFiles = paths => paths.map(readFile)

const toObjects = promises => promises.map(p => JSON.parse(p))
const resolveFiles = promises => Promise.all(promises)

function Pessoa(id = null, nome = '', sobrenome = '', idade = null, hobbies = [], profissao = '', sexo = null) {
  this.id = id
  this.nome = nome.removeSpace().captalize()
  this.sobrenome = sobrenome.removeSpace().captalize()
  this.idade = idade
  this.hobbies = hobbies
  this.profissao = profissao.removeSpace().captalize()
  this.sexo = sexo.removeSpace().captalize()
}

const novo = (fn, ...argumentos) => {
  const obj = Object.create(fn.prototype)
  Reflect.apply(fn, obj, argumentos)
  return obj
}

const criarPessoa = obj => novo(Pessoa, ...Object.values(obj))
const criarPessoas = stream => {
  stream[0] = stream[0].map(criarPessoa)
  return stream
}

String.prototype.removeSpace = function () {
  return this.trim()
}

String.prototype.captalize = function () {
  if (!!this.toString()) return `${this[0].toUpperCase() + this.slice(1)}`
  return this.toString()
}

readDir(dir)
  .then(readFiles)
  .then(resolveFiles)
  .then(toObjects)
  .then(criarPessoas)
  .then(console.log)