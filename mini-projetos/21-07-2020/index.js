const path = require('path')
const fs = require('fs')
const pathFile = path.resolve(__dirname, '../shared/texto.json')

function composicao(...fn) {
  return valor => {
    return fn.reduce(async (acc, fn) => {
      if (Promise.resolve(acc) === acc) {
        return fn(await acc)
      } else {
        return fn(acc)
      }
    }, valor)
  }
}

const readFile = path => new Promise((resolve, reject) => {
  fs.readFile(path, { encoding: 'utf-8' }, (erro, content) => {
    if (erro) reject(erro)
    resolve(content.toString())
  })
})

const jsonParse = texto => JSON.parse(texto)
const retornaTexo = obj => obj[0].texto
const removeSpace = texto => texto.trim()
const isMaxLength = num => texto => {
  if (texto.length > num) {
    return { isMax: true, texto, num }
  } else {
    return { isMax: false, texto, num }
  }
}

const splitTexto = obj => {
  if (!obj.isMax) return obj.texto
  return `${obj.texto.slice(0, 60)}...`
}

const length = texto => texto.length

readFile(pathFile)
  .then(texto => {
    composicao(
      jsonParse,
      retornaTexo,
      removeSpace,
      isMaxLength(60000),
      splitTexto,
    )(texto).then(console.log)
  })