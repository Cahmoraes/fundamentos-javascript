const numeros = [1, 2, 3, 4, 5]
const iterator = numeros[Symbol.iterator]()
console.log(iterator.next())

for (const n of numeros) {
  console.log(n)
}