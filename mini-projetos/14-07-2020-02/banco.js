const sequence = Object.defineProperty({}, 'id', {
  enumerable: true,
  configurable: false,
  writable: true,
  value: 1
})
Object.defineProperty(sequence, 'getId', {
  value: function () {
    return this.id++
  }
})

const produtos = {}

const salvarProduto = produto => {
  if (!produto.id) produto.id = sequence.getId()
  produtos[produto.id] = produto
  return produtos[produto.id]
}

const editarProduto = produto => {
  produtos[produto.id] = produto
  return produtos[produto.id]
}

const excluirProduto = id => {
  const produto = produtos[id]
  delete produtos[id]
  return produto
}


const listarProduto = id => produtos[id]

const listarProdutos = () => produtos

module.exports = () => {
  return {
    listarProduto,
    listarProdutos,
    excluirProduto,
    editarProduto,
    salvarProduto
  }
}