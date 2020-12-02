const fs = require('fs')
const path = require('path')
const LinkedList = require('../../estrutura-de-dados/linkedList/linkedList-5/Linkedist')
const pathDir = path.resolve(__dirname, '../shared')

const linked = new LinkedList

const loadDir = pathDir => new Promise((resolve, reject) => {
  fs.readdir(pathDir, { encoding: 'utf-8' }, (error, files) => {
    if (error) reject(error)
    resolve(files)
  })
})

const readFile = pathFile => new Promise((resolve, reject) => {
  fs.readFile(pathFile, { encoding: 'utf-8' }, (error, data) => {
    if (error) reject(error)
    resolve(data.toString())
  })
})

const readFiles = pathFile => arrFiles => Promise.all(arrFiles.map(file => readFile(path.resolve(__dirname, pathFile, file))))

const parseObj = arrString => arrString.map(string => JSON.parse(string))


function Pessoa(id = null, nome = '', sobrenome = '', idade = null, hobbies = [], profissao = '', sexo = '') {
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

const criarPessoa = obj => novo(Pessoa, ...Object.values(obj))
const criarPessoas = arrObj => arrObj.map(criarPessoa)

const addPessoaList = pessoa => linked.push(pessoa)
const addPessoasToList = pessoas => pessoas.reduce((acc, pessoa) => {
  addPessoaList(pessoa)
  return acc = acc + 1
}, 0)

const getPessoasFromList = () => {
  console.log(linked.size())
  let list = linked.getElementAt(0).element.nome.trim()
  for (let i = 1; i < linked.size(); i++) {
    list = `${list}, ${(linked.getElementAt(i)).element.nome.trim()}`
  }
  return list
}

module.exports = () => ({
  loadDir,
  readFiles,
  parseObj,
  criarPessoas,
  addPessoasToList,
  getPessoasFromList
})