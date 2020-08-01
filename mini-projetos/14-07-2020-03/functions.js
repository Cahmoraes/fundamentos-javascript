const sequence = Object.defineProperties({}, {
  id: {
    value: 1,
    enumerable: true,
    configurable: false,
    writable: true
  },
  getId: {
    value: function () {
      return this.id++
    },
    configurable: false,
    writable: false
  }
})

const produtos = new Object

const salvarProduto = produto => {
  if (!produto.id) produto.id = sequence.getId()
  produtos[produto.id] = produto
  console.log('salvarProduto: ', produtos[produto.id])
  return produtos[produto.id]
}

const listarProdutos = () => produtos

module.exports = () => {
  return {
    listarProdutos,
    salvarProduto
  }
}