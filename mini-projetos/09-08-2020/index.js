const path = require('path')
const pathDir = path.resolve(__dirname, '../shared')
const fn = require('./functions')()

const composition = (...fns) => {
  return value => {
    return fns.reduce(async (acc, fn) => {
      if (Promise.resolve(acc) === acc) {
        return fn(await acc)
      } else {
        return fn(acc)
      }
    }, value)
  }
}

const parsePessoas = arrData => {
  arrData[0] = fn.criarPessoas(arrData[0])
  return arrData[0]
}

composition(
  fn.readFiles(pathDir),
  fn.parseObj,
  parsePessoas,
  fn.addPessoasToList,
  fn.getPessoasFromList
)(fn.loadDir(pathDir))
  .then(console.log)