const sequence = {
  id: 1,
  getId() {
    return this.id++
  }
}

const produtos = new Object

const salvarProduto = produto => {
  if (!produto.id) produto.id = sequence.getId()
  produtos[produto.id] = produto
  return produto
}

const retornarProdutos = () => produtos

const excluirProdutos = id => {
  const produto = produtos[id]
  delete produtos[id]
  return produto
}

const alterarProduto = produto => {
  produtos[produto.id] = produto
  return produtos[produto.id]
}



// salvarProduto({ name: 'iPad Pro' })
// console.log(retornarProdutos())

// console.log(alterarProduto({ id: 1, name: 'Iphone' }))
// console.log(retornarProdutos())

// console.log(excluirProdutos(1))
// console.log(retornarProdutos())