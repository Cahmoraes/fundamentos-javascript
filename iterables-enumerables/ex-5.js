const nomes = [
  {
    nome: 'caique'
  },
  {
    nome: 'thomas'
  },
  {
    nome: 'isabella'
  }
]

// for (const item of nomes) {
//   for (const [key, value] of Object.entries(item)) {
//     console.log(key, value)
//   }
// }

for (const item of nomes) {
  for (const key in item) {
    console.log(item[key])
  }
}