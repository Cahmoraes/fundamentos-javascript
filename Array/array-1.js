const numeros = Array.of(200, 6, 700, 4, 3, 9, 0, 1, 5, 8)

const numerosSort = numeros.sort(function (a, b) {
  if (a > b) {
    console.log(`a: ${a} maior que b: ${b}`)
    return -1
  } else if (b > a) {
    console.log(`b: ${b} maior que a: ${a}`)
    return 1
  } else {
    console.log(`a: ${a} é igual a b: ${b}`)
    return 0
  }
})

console.log(numeros)