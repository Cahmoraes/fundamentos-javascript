function somarAte(max) {
  if (arguments[1] === undefined) {
    arguments[1] = 0
    arguments[2] = 0
  }
  if (arguments[1] >= max) {
    return arguments[2]
  }
  return somarAte(max, arguments[1] + 1, arguments[2] + 1)
}

console.log(somarAte(10))