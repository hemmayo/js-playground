const todos = ['Go home', 'Pray', 'Sleep', 'Code', 'Watch movies']
// console.log(todos[todos.length - 1], todos[todos.length - 2])
console.log(todos)

// Delete the 3rd item
todos.splice(2, 1)
// Add a new item unto the end
todos.push('Call your girlfriend')
// Remove the first item from the list
todos.shift()

// console.log(todos)
todos.forEach(function(todo, index) {
    console.log(index + 1 + '.', todo)
})

for (let count = 0; count < todos.length; count++) {
    console.log(`${count+1}. ${todos[count]}`)
}
