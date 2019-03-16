const people = [
    {
        name: 'Andrew',
        age: 19
    }, {
        name: 'Emmauel',
        age: 22
    }, {
        name: 'Andrew',
        age: 27
    }
]

person = people.find((person) => person.age === 22)
console.log(person.name)