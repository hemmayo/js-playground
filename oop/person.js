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

class Employee extends Person {
    constructor(firstName, lastName, age, position, likes) {
        super(firstName, lastName, age, likes)
        this.position = position
    }
    getBio () {
        let bio = `${this.firstName} is a ${this.position}.`
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
        return `${this.firstName} is ${this.grade >= 70 ? 'passing' : 'failing'} the cutoff mark.`
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
