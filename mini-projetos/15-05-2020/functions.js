const sequence = new Object
Object.defineProperty(sequence, 'id', {
  value: 1,
  enumerable: true,
  configurable: false,
  writable: true
})

Object.defineProperties(sequence, {
  getId: {
    value() {
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

// salvarProduto({ nome: 'carro', preco: 1235.99 })
// salvarProduto({ nome: 'Jipe', preco: 2235.99 })
// salvarProduto({ nome: 'Ferrari', preco: 6235.99 })
// console.log(listarProdutos())


module.exports = {
  listarProdutos,
  salvarProduto,
  listarProduto
}