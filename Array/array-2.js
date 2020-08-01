const pessoas = [
  {
    nome: 'caique',
    idade: 26
  },
  {
    nome: 'igor',
    idade: 14
  },
  {
    nome: 'thomas',
    idade: 20
  },
  {
    nome: 'isabella',
    idade: 22
  }
]

console.log(pessoas.sort((a, b) => b.idade - a.idade))

console.log(pessoas.sort((a, b) => a.nome.localeCompare(b.nome)))

const encontarNome = nome => array => array.nome === nome

console.log(pessoas.findIndex(encontarNome('caique')))
const ps = ['caique', 'igor', 'isabella', 'thomas']
console.log(ps.includes('igor'))