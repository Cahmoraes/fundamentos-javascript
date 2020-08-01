const fetch = require('node-fetch')

const turmas = [
  "http://files.cod3r.com.br/curso-js/turmaA.json",
  "http://files.cod3r.com.br/curso-js/turmaB.json",
  "http://files.cod3r.com.br/curso-js/turmaC.json"
]

const getTurma = turma => fetch(turma)
const parse = response => response.json()
const parseJson = responses => Promise.all(responses.map(parse))
const criarTurma = obj => new Turma(obj)
const criarTurmas = arrayObjetos => arrayObjetos.map(criarTurma)

const criarAlunos = turmas => {
  turmas.forEach(turma => {
    turma.alunos = turma.alunos.map(criarAluno)
  })
  return turmas
}
const criarAluno = obj => new Aluno(...Object.values(obj))

function Aluno(id = null, nome = '', imagem = '') {
  this.id = id
  this.nome = nome
  this.imagem = imagem
}

function Turma(alunos = []) {
  this.alunos = alunos
}

Promise.all([
  getTurma(turmas[0]),
  getTurma(turmas[1]),
  getTurma(turmas[2])
])
  .then(parseJson)
  .then(criarTurmas)
  .then(criarAlunos)
  .then(turmas => {
    console.log(turmas[0].alunos[0].nome)
  })
  .catch(e => {
    console.log(e)
  })