const fs = require('fs')

const readDir = path => {
  return new Promise((resolve, reject) => {
    fs.readdir(path, { encoding: 'utf-8' }, (error, files) => {
      if (error) reject(error)
      resolve(files)
    })
  })
}

const readFile = pathFile => new Promise((resolve, reject) => {
  fs.readFile(pathFile, (error, content) => {
    if (error) reject(error)
    resolve(content.toString())
  })
})

const readFiles = dir => arrFiles => Promise.all(arrFiles.map(file => readFile(dir.concat('/', file))))

const parseJson = string => JSON.parse(string)

const parseArrayToJson = array => array.map(parseJson)

const sequence = Object.defineProperties({}, {
  id: {
    value: 1,
    enumerable: true,
    configurable: false,
    writable: true
  },
  getId: {
    value() {
      return this.id++
    }
  }
})

function Pessoa(id = null, nome = '', sobrenome = '', idade = 0, hobbies = [], profissao = '', sexo = '') {
  this.id = id
  this.nome = nome
  this.sobrenome = sobrenome
  this.idade = idade
  this.hobbies = hobbies
  this.profissao = profissao
  this.sexo = sexo
}

const novo = (fn, ...argumentos) => {
  const Obj = Object.create(fn.prototype)
  Reflect.apply(fn, Obj, argumentos)
  return Obj
}

const createPessoa = obj => novo(Pessoa, ...Object.values(obj))

const createPessoas = arrObj => {
  arrObj[0] = arrObj[0].map(createPessoa)
  return arrObj
}

module.exports = () => ({
  readDir,
  readFiles,
  parseArrayToJson,
  createPessoas
})