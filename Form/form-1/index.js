const perguntas = [
  {
    label: 'Possui carro?',
    options: [
      'sim',
      'nao'
    ],
    id: 'carro'
  },
  {
    label: 'Possui irmãos?',
    options: [
      'sim',
      'nao'
    ],
    id: 'irmaos'
  },
  {
    label: 'Selecione um Produto',
    options: [
      'Computador',
      'Tablet',
      'Smartphone'
    ],
    id: 'produto'
  }
]


function criarSelect({ options, id, label }) {
  const form = document.getElementById('formulario')
  const div = document.createElement('div')
  div.setAttribute(`data-div-select`, `${id}`)
  div.innerHTML = `
  <label for="${id}">${label}</label>
  <select id="${id}" name="${id}">
  <option value="" selected disabled>Selecione</option>
  ${
    options.map(option => (
      `<option value="${option}">${option}</option>`
    )).join('')
    }
  </select>
  <input type="text" id="obs-${id}" value="${option[0]}">
  `
  form.insertAdjacentElement('beforeend', div)
}


function criarSelects(perguntas) {
  perguntas.forEach(criarSelect)
}

criarSelects(perguntas)

const ids = document.querySelectorAll('[id^="obs-"]')
ids.forEach(id => console.log(id.value))