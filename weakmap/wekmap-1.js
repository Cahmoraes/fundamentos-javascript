// Obrigatoriamente a chave deve ser um objeto ou uma função
const wk = new WeakMap()
const car = function () { }
wk.set(car, [1, 2, 3, 4])
const s = wk.get(car)
s.push(5)
console.log(s)
console.log(wk.get(car))