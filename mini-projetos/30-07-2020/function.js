const fs = require('fs')

String.prototype.capitalize = function () {
  return this.charAt(0).toUpperCase() + this.slice(1)
}

const readDir = dir => new Promise((resolve, reject) => {
  fs.readdir(dir, (error, files) => {
    if (error) reject(error)
    resolve(files)
  })
})

const readFile = pathFile => new Promise((resolve, reject) => {
  fs.readFile(pathFile, { encoding: 'utf-8' }, (error, content) => {
    if (error) reject(error)
    resolve(content.toString())
  })
})

const toObject = arrFiles => arrFiles.map(file => JSON.parse(file))
const parseDir = dir => arrFiles => arrFiles.map(file => dir.concat('\\', file))

function parseDir2(dir) {
  return function (arrFiles) {
    return arrFiles.map(file => dir.concat('\\', file))
  }
}

const readFiles = arrFiles => Promise.all(arrFiles.map(readFile))

function Pessoa(id = '', nome = '', sobrenome = '', idade = null, hobbies = [], profissao = '', sexo = '') {
  this.id = id
  this.nome = (typeof nome === 'string') ? nome.capitalize().trim() : nome
  this.sobrenome = (typeof sobrenome === 'string') ? sobrenome.capitalize().trim() : sobrenome
  this.idade = idade
  this.hobbies = hobbies
  this.profissao = (typeof profissao === 'string') ? profissao.capitalize().trim() : profissao
  this.sexo = sexo
}

function novo(fn, ...argumentos) {
  const Obj = Object.create(fn.prototype)
  Reflect.apply(fn, Obj, argumentos)
  return Obj
}

const criarPessoa = objPessoa => novo(Pessoa, ...Object.values(objPessoa))

const criarPessoas = arrObjPessoa => {
  arrObjPessoa[0] = arrObjPessoa[0].map(criarPessoa)
  return arrObjPessoa
}

module.exports = () => {
  return {
    readDir,
    parseDir,
    readFiles,
    toObject,
    criarPessoas
  }
}