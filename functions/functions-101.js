// Function - input, code, output

// let greetUser = function () {
//     console.log('Welcome User!')
// }

let greetUser = () => {
    console.log('Welcome User!')
}
greetUser()

let square = (num) => {
    return num * num
}

console.log(square(3))

// Convert temperatures

let convertToCelsius = (fahrenheit) => {
    return (fahrenheit - 32) * (5 / 9)
}

let convertToKelvin = (fahrenheit) => {
    return (fahrenheit + 459.67) * (5 / 9)
}

console.log(convertToCelsius(68))