const add = function (a, b) { 
    return arguments[0] + arguments[1]
}

console.log(add(11, 22, 33, 44))

const car = {
    color: 'Red',
    getSummary: function () {
        return `The car is ${this.color}`
    }
}
const carArrow = {
    color: 'Red',
    getSummary: () => {
        return `The car is ${this.color}`
    }
}

const carShort = {
    color: 'Red',
    getSummary() {
        return `The car is ${this.color}`
    }
}
console.log(car.getSummary())
console.log(carArrow.getSummary())
console.log(carShort.getSummary())