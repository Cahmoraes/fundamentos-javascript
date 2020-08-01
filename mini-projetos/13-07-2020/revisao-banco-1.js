const sequence = {
  id: 1,
  getId() {
    return this.id++
  }
}

const produtos = {}

const salvarProduto = produto => {
  if (!produto.id) produto.id = sequence.getId()
  produtos[produto.id] = produto
  return produto
}

const retornarProdutos = () => {
  return produtos
}

const excluirProduto = id => {
  const produto = produtos[id]
  delete produtos[id]
  return produto
}

const excluirProdutos = () => {
  for (const key in produtos) {
    delete produtos[key]
  }
}

const alterarProduto = produto => {
  produtos[produto.id] = produto
  return produtos[produto.id]
}

module.exports = () => {
  return {
    alterarProduto,
    excluirProdutos,
    excluirProduto,
    retornarProdutos,
    salvarProduto
  }
}