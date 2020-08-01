const composition = (...fns) => {
  return valor => {
    return fns.reduce(async (acc, fn) => {
      try {
        if (Promise.resolve(acc) === acc) {
          return fn(await acc)
        } else {
          return fn(acc)
        }
      } catch (e) {
        console.log('catch erro')
        throw new ErrorHandlerComposition(e)
      }
    }, valor)
  }
}
const getText = () => ` Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. `

function ErrorHandlerComposition(message) {
  this.message = message
  this.name = 'ErrorHandlerComposition'
  this.getMessage = function () {
    return `${this.message}\r\n${this.name}`
  }
}

module.exports = {
  composition,
  getText,
  ErrorHandlerComposition
}