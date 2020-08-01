const path = require('path')
const funcoes = require('./funcoes')()
const url = path.resolve(__dirname, '../shared')

const doTheJob = async url => {
  try {
    const response = await funcoes
      .readDir(url)
      .then(funcoes.readFiles(url))
      .then(funcoes.resolveAllFiles)
      .then(funcoes.parseDados)
      .then(funcoes.cirarPessoas)
    console.log(response)
  } catch (e) {
    console.log(e)
  }
}


doTheJob(url)
