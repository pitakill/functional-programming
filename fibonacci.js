// Imperative
const fibonacciImperative = number => {
  let a = 1
  let b = 0
  let temporal

  while (number >= 0){
    temporal = a;
    a = a + b;
    b = temporal;
    number--;
  }

  return b;
}

console.log(fibonacciImperative(400))

// Declarative
const fibonacci = number => {
  if (number <= 1) return 1
  return fibonacci(number - 1 ) + fibonacci(number - 2)
}

console.log(fibonacci(40))
