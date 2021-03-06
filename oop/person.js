// Prototypal inheritance

class Person {
    constructor (firstName, lastName, age, likes = []) {
        this.firstName = firstName
        this.lastName = lastName
        this.age = age
        this.likes = likes
    }
    getBio () {
        let bio = `${this.fullName} is ${this.age}.`
        this.likes.forEach((like) => {
            bio += ` ${this.fullName} likes ${like}.`
        })
        return bio
    }
    set fullName (fullName) {
        const names = fullName.split(' ')
        this.firstName = names[0]
        this.lastName = names[1] ? names[1] : ''
    }
    get fullName () {
        return `${this.firstName} ${this.lastName}`
    }
}

class Employee extends Person {
    constructor(firstName, lastName, age, position, likes) {
        super(firstName, lastName, age, likes)
        this.position = position
    }
    getBio () {
        let bio = `${this.fullName} is a ${this.position}.`
        return bio
    }
    getYearsLeft () {
        return 65 - this.age
    }
}

class Student extends Person {
    constructor (firstName, lastName, age, likes, grade = 0) {
        super(firstName, lastName, age, likes)
        this.grade = grade
    }
    getBio () {
        return `${this.fullName} is ${this.grade >= 70 ? 'passing' : 'failing'} the cutoff mark.`
    }
    updateGrade (grade) {
        this.grade += grade
        this.grade = this.grade > 100 ? 100 : this.grade < 0 ? 0 : this.grade
    }
}

const me = new Student('Emmanuel', 'Popoola', 19, ['eating'], 10)
console.log(me.getBio())
me.updateGrade(72)
console.log(me.getBio())
