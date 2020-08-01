const sequence = new Object

Object.defineProperties(sequence, {
  id: {
    value: 1,
    enumerable: true,
    writable: true,
    configurable: false
  },
  getId: {
    value: function () {
      return this.id++
    }
  }
})

const produtos = new Object

const salvarProduto = produto => {
  if (!produto.id) produto.id = sequence.getId()
  produtos[produto.id] = produto
  return produtos[produto.id]
}

const listarProdutos = () => produtos

const listarProduto = id => produtos[id]

const atualizarProduto = produto => {
  produtos[produto.id] = produto
  return produtos[produto.id]
}

const excluirProduto = id => {
  const produto = produtos[id]
  delete produtos[id]
  return produto
}

const limparBanco = () => {
  for (const key in produtos) {
    delete produtos[key]
  }
}

module.exports = () => {
  return {
    atualizarProduto,
    limparBanco,
    excluirProduto,
    listarProduto,
    listarProdutos,
    salvarProduto
  }
}