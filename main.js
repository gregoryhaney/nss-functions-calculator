
// =================================================

const add = (firstNumber, secondNumber) => {
    const sum = firstNumber + secondNumber
    return sum
}

let answerAdd = add(17, 9)
console.log(`The answer is ${answerAdd}.`)

// =================================================

const subtract = (firstNumber, secondNumber) => {
    const diff = (firstNumber - secondNumber)
    return diff
}

let answerDiff = subtract(10, 4)
console.log(`The answer is ${answerDiff}.`)

// =================================================

const divide = (firstNumber, secondNumber) => {
    const quotient = (firstNumber, secondNumber)
    return quotient
}

let divideAnswer = divide(100, 4)
console.log(`The answer is ${divideAnswer}.`)

// =================================================

const multiply = (firstNumber, secondNumber) => {
    const product = (firstNumber * secondNumber)
    return product
}

let productAnswer = multiply(4000, 20)
console.log(`The answer is ${productAnswer}.`)

// =================================================

const square = (theNumber) => {
    const squared = (theNumber * theNumber)
    return squared
}

let squaredAnswer = square(25)
console.log(`The answer is ${squaredAnswer}.`)

// =================================================

/* Solve this problem using your calculator.

A quarter of the animals on a farm have four legs. 
The remaining three quarters of the animals 
have two legs. If there are 60 legs overall, 
how many animals are there on the farm?

for every one 4-leg, there are three 2-leg
   create variable to hold result of adding 1 and 3
that totals four animals and ten legs
    and multiply that result by 6
60 legs divided by 10 legs equals 6 groups, each
with one 4-legger and three 2-leggers.
six 4-leggers plus 18 2-leggers equals 24 animals

*/
// =================================================

let fourLeg = 1
let twoLeg = 3
let groups = 6
let totalAnimals = ((fourLeg + twoLeg) * groups)

console.log(`There are a total of ${totalAnimals} animals.`)
