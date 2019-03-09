let name = 'Emma Popoola'

// Length property
console.log(name.length)

// Convert to uppercase
console.log(name.toUpperCase())

// Convert to lowercase
console.log(name.toLowerCase())

// Includes
let password = 'abc123password'
console.log(password.includes('password'))

// trim
name = '  Emma Pop '
console.log(name.trim())

let isValidPassword = function (password) {
    password = password.trim()
    return (password.length > 8 && !password.includes('password'))
}

console.log(isValidPassword('emma'))
console.log(isValidPassword('737284emas#$*'))
console.log(isValidPassword('huisdh789382password'))