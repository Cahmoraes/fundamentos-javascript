const { composition, getText: pegarTexto } = require('./composition')

const getLength = texto => new Promise((resolve, reject) => {
  try {
    resolve(texto.length)
  } catch (e) {
    reject(e)
  }
})
const removeSpaces = texto => new Promise((resolve, reject) => {
  try {
    resolve(texto.trim())
  } catch (e) {
    reject(e)
  }
})


composition(
  removeSpaces,
  getLength
)(pegarTexto())
  .then(console.log)
  .catch(e => console.log(e.getMessage()))
  .finally(console.log.bind(console, "Fim"))