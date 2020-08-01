function fn1() {
  let nome = ''
  return function fn2() {
    let idade = 0
    return (n, i) => {
      console.log('antes: ', { nome, idade })
      nome = n
      idade = i
      return { nome, idade }
    }
  }
}

const apresentar = fn1()()
console.log(apresentar('caique', 26))
console.log(apresentar('thomas', 20))
console.log(apresentar('isabella', 22))