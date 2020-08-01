const p = new Promise(function (resolve) {
  resolve(true)
})

function gerarAleatorioEntre(min, max) {
  if (min > max) [max, min] = [min, max]
  console.log(min, max)
  return new Promise((resolve) => {
    resolve(parseInt(Math.random() * (max - min) + min))
  })
}

gerarAleatorioEntre(3, 1).then(console.log)
