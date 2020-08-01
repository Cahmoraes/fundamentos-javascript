const sequence = Object.defineProperties({}, {
  id: {
    value: 1,
    enumerable: true,
    configurable: false,
    writable: true
  },
  getId: {
    value() {
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
  return produtos[produto.id]
}

const listarProdutos = () => produtos

module.exports = () => ({
  listarProdutos,
  salvarProduto
})