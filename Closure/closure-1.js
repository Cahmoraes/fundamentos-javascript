
let iterator = 0
function fn1(somador) {
  function somatorio() {
    somador++
    iterator++
    console.log()
    return { somador, iterator }
  }
  return somatorio
}

const sm = fn1(0)
console.log(sm())
console.log(sm())
console.log(sm())