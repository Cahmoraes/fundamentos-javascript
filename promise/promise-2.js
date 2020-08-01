const p1 = new Promise((resolve) => setTimeout(resolve, 2000, 'p1 2000'))
const p2 = new Promise((resolve) => setTimeout(resolve, 4000, 'p2 2000'))

const promises = [p1, p2]

Promise.race(promises)
  .then(console.log)


Promise.all(promises)
  .then(function (resultados) {
    console.log(resultados)
  })