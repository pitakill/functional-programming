// Not pure
const myArray = [1,2,3,4,5]

const addElements = (array, elements) => {
  elements.forEach(element => array.push(element))
  return myArray
}

addElements(myArray, [6,7,8,9,10])

console.log(myArray)
console.log(myArray)

// Pure
const myArrayPure = [1,2,3,4,5]

const addElementsPure = (array, elements) => array.concat(elements)

addElementsPure(myArrayPure, [6,7,8,9,10])

console.log(myArrayPure)
console.log(addElementsPure(myArrayPure, [6,7,8,9,10]))
console.log(myArrayPure)
