// Imperative
function sumOfSquaresImperative(nums) {
  const squares = []
  let sum = 0

  for (let i = 0; i < nums.length; i++) {
    squares.push(nums[i] * nums[i])
  }

  for (let i = 0; i < squares.length; i++) {
    sum += squares[i]
  }

  return sum
}

console.log(sumOfSquaresImperative([1, 2, 3, 4, 5]))

// Declarative
const sumOfSquaresDeclarative = nums => (
  nums
    .map(num => num * num)
    .reduce((start, num) => (start + num), 0)
)

console.log(sumOfSquaresImperative([1, 2, 3, 4, 5]))
