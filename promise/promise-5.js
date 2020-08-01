const fs = require('fs')
const path = require('path')

const dir = path.resolve(__dirname, '../mini-projetos/shared')

const readDir = path => {
  return new Promise((resolve, reject) => {
    fs.readdir(path, { encoding: 'utf-8' }, (error, files) => {
      if (error) reject(error)
      resolve(files)
    })
  })
}

const readFile = pathFile => new Promise((resolve, reject) => {
  fs.readFile(pathFile, { encoding: 'utf-8' }, (error, content) => {
    if (error) reject(error)
    resolve(content.toString())
  })
})

const pathFile = dir => files => files.map(file => dir.concat('/', file))
const readFiles = arrFiles => arrFiles.map(readFile)

const resolveFiles = arrPromises => Promise.all(arrPromises)
const toObject = array => array.map(a => JSON.parse(a))

readDir(dir)
  .then(pathFile(dir))
  .then(readFiles)
  .then(resolveFiles)
  .then(toObject)
  .then(console.log)