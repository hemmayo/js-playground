// Prototypal inheritance

class Person {
    constructor (firstName, lastName, age, likes = []) {
        this.firstName = firstName
        this.lastName = lastName
        this.age = age
        this.likes = likes
    }
    getBio () {
        let bio = `${this.firstName} is ${this.age}.`
        this.likes.forEach((like) => {
            bio += ` ${this.firstName} likes ${like}.`
        })
        return bio
    }
    setName (fullName) {
        const names = fullName.split(' ')
        this.firstName = names[0]
        this.lastName = names[1] ? names[1] : ''
    }
}

const me = new Person('Emmanuel', 'Popoola', 19, ['Teaching', 'Singing'])
me.setName('Emma Popoola')
console.log(me, me.getBio())
