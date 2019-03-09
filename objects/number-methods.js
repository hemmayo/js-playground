let num = 103.941

console.log(num.toFixed(2))
console.log(Math.round(num))
console.log(Math.floor(num))
console.log(Math.ceil(num))

let min = 4
let max = 10
let randomNum = Math.floor(Math.random() * (max - min + 1)) + min
console.log(randomNum)

// Challenge

let makeGuess = function (number, min, max) {
    let randomNum = Math.floor(Math.random() * (max - min + 1)) + min
    return (randomNum === number)
}

console.log(makeGuess(2, 1, 5))