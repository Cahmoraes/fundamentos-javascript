const sequence = Object.defineProperties({}, {
  id: {
    value: 1,
    writable: true,
    configurable: false,
    enumerable: true
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

const alterarProduto = produto => {
  produtos[produto.id] = produto
  return produtos[produto.id]
}

const excluirProduto = id => {
  const produto = produtos[id]
  delete produtos[id]
  return produto
}

const limparProdutos = () => {
  for (const key in produtos) delete produtos[key]
}


module.exports = () => {
  return {
    limparProdutos,
    excluirProduto,
    alterarProduto,
    listarProdutos,
    salvarProduto,
    listarProduto
  }
}