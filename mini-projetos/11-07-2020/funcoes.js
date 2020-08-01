const path = require('path')
const fs = require('fs')
const file = '../shared/dados.json'

const url = path.resolve(__dirname, file)

String.prototype.capitalize = function () {
  return this.charAt(0).toUpperCase() + this.slice(1)
}


const lerDados = url => new Promise((resolve, reject) => {
  fs.readFile(url, {}, (erro, conteudo) => {
    if (erro) reject(erro)
    resolve(conteudo.toString())
  })
})

const toJson = string => Promise.resolve(JSON.parse(string))

const PrototipoPessoa = Object.create(Object.defineProperties({}, {
  nome: {
    writable: true,
    configurable: false,
    enumerable: true,
    value: 'thomas'
  },
  sobrenome: {
    writable: true,
    configurable: false,
    enumerable: true
  },
  idade: {
    value: 26,
    writable: true,
    configurable: false,
    enumerable: true
  },
  hobbies: {
    writable: true,
    configurable: false,
    enumerable: true
  },
  sexo: {
    writable: true,
    configurable: false,
    enumerable: true
  }
}))

const createPessoa = (obj) => {
  const nome = obj.nome
  const sobrenome = obj.sobrenome
  const idade = obj.idade
  const hobbies = obj.hobbies
  const profissao = obj.profissao
  const sexo = obj.sexo
  return Object.setPrototypeOf({
    nome, idade, sobrenome, hobbies, profissao, sexo
  }, PrototipoPessoa)
}

const createPessoas = dados => dados.map(createPessoa)

module.exports = () => {
  return {
    createPessoas,
    toJson,
    lerDados
  }
}