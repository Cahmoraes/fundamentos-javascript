const makeIterator = (array) => {
  let nextIndex = 0
  return {
    next() {
      console.log(nextIndex)
      return nextIndex < array.length ?
        { value: array[nextIndex++], done: false } :
        { done: true }
    }
  }
}

const it = makeIterator(['caique', 'thomas'])
console.log(it.next())
console.log(it.next())
console.log(it.next())