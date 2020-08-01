const fn1 = () => {
  let nome = ''
  function alteraNome(novoNome) {
    console.log(nome)
    nome = novoNome
  }
  return alteraNome
}

const declaraNome = fn1()
declaraNome('caique')
declaraNome('thomas')
declaraNome('isabella')
declaraNome('igor')
