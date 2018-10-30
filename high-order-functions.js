const myFunction = () => console.log("Hello World")

const otherFunction = fn => fn()

otherFunction(myFunction)

// More interesting
const add = x => y => x + y

//const add = function(x) {
  //return function(y) {
    //return x + y
  //}
//}

const add2 = add(2)
const add3 = add(3)

console.log(add2(10))
console.log(add3(50))
