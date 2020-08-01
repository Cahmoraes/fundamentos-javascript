const fetch = require('node-fetch')

const url = 'http://localhost:3003'

const getPessoas = async () => {
  try {
    const response = await fetch(url + '/pessoas')
    // const json = await response.json()
    const texto = await response.text()
    console.log(texto)
  } catch (e) {
    console.log(e)
  }
}

const addPessoa = async pessoa => {
  try {
    const response = await fetch(url + '/pessoas', {
      method: 'POST',
      headers: {
        'content-type': 'text/plain; charset=utf-8'
      },
      body: pessoa
    })
    const texto = await response.text()
    console.log(texto)
  } catch (e) {
    console.log(e)
  }
}

addPessoa('isabella')

getPessoas()