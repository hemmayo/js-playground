// const todos = ['Go home', 'Pray', 'Sleep', 'Code', 'Watch movies']

// 1. Convert array to array of objects -> text, completed
const todos = [
    {
        text: 'Go home',
        completed: false
    }, {
        text: 'Pray to God',
        completed: false
    }, {
        text: 'Watch Movies',
        completed: true
    }, {
        text: 'Sleep',
        completed: true
    }
]

// 2. Create a function to delete a todo by text value

const deleteTodo = (todos, text) => {
    const todoIndex = todos.findIndex(function (todo, index){
        return todo.text.toLowerCase() === text.toLowerCase()
    })
    if (todoIndex === -1){
        return false
    } else {
        todos.splice(todoIndex, 1)
        return true
    }
}

const getThingsToDo = (todos) => {
    return todos.filter((todo) => !todo.completed)
}
console.log(getThingsToDo(todos))

// deleteTodo(todos, 'go home')
// console.log(todos)

// 3. Sort todos by completeness
const sortTodos = function (notes) {
    notes.sort(function (a, b){
        if(!a.completed && b.completed){
            return -1
        } else if(a.completed && !b.completed){
            return 1
        } else {
            return 0
        }
    })
}
sortTodos(todos)
console.log(todos)