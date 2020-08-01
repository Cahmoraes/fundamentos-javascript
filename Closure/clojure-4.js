const somarNumeros = num1 => {
  return (num2) => {
    return num1 + num2
  }
}

const somar3Com = somarNumeros(3)
const somar4Com = somarNumeros(4)

console.log(somar3Com(2))
console.log(somar4Com(2))
console.log(somar4Com(2))