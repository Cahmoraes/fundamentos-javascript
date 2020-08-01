Object.prototype.myTag = 'tag'

function Pessoa() { }

console.log(Pessoa.__proto__ === Function.prototype)
console.log(Pessoa.prototype.__proto__.__proto__)

console.log(Object.prototype.__proto__) // null