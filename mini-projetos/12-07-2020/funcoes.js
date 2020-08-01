const fs = require('fs')

String.prototype.capitalize = function () {
  return this.charAt(0).toUpperCase() + this.slice(1)
}

const readDir = pathDir => new Promise((resolve, reject) => {
  fs.readdir(pathDir, { encoding: "utf-8" }, (error, files) => {
    if (error) reject(error)
    resolve(files)
  })
})

const concatPathFile = pathDir => files => files.map(file => pathDir.concat('\\', file))
const readFile = pathFile => new Promise((resolve, reject) => {
  fs.readFile(pathFile, (error, data) => {
    if (error) reject(error)
    resolve(data.toString())
  })
})
const readFiles = filesPath => Promise.all(filesPath.map(readFile))
const jsonToOject = jsonFile => JSON.parse(jsonFile)
const parseToObjects = jsonFiles => jsonFiles.map(jsonToOject)

function Pessoa(id = null, nome = null, sobrenome = null, idade = 0, hobbies = [], profissao = null, sexo = null) {
  this.id = id
  this.nome = nome
  this.sobrenome = sobrenome
  this.idade = idade
  this.hobbies = hobbies
  this.profissao = profissao
  this.sexo = sexo
}

const novo = (fn, ...argumentos) => {
  const obj = Object.create(fn.prototype)
  Reflect.apply(fn, obj, argumentos)
  return obj
}

module.exports = () => {
  return {
    readDir,
    concatPathFile,
    readFiles,
    parseToObjects,
    novo,
    Pessoa
  }
}