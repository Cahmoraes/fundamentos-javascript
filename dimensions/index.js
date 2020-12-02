const div_1 = document.querySelector('#div_1')
const getParent = el => {
  let lastParent = el
  const obj = { offsetTop: 0 }
  while (lastParent.offsetParent !== null) {
    obj.offsetTop = obj.offsetTop + lastParent.offsetTop
    obj.offsetParent = lastParent.offsetParent
    lastParent = lastParent.offsetParent
  }
  return obj
}

console.log(getParent(div_1))

console.log(div_1.offsetTop)