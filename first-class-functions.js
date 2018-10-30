// Callback are first-class
const mySimpleFunction = () => console.log("Hello World")

const otherSimpleFunction = (boolean, fn) => {
  if (boolean) fn()
}

otherSimpleFunction(true, mySimpleFunction)
otherSimpleFunction(false, mySimpleFunction)

// More interesting
const myFunction = data => console.log(data)

const otherFunction = (data, fn) => {
  if (data) fn(data)
}

otherFunction("Hello World", myFunction)
otherFunction(undefined, myFunction)
otherFunction("Hola Mundo", myFunction)
