// Remove all p tags that have 'the' in the text
// let paragraphs = document.querySelectorAll('p')
// paragraphs.forEach(paragraph => {
//     if(paragraph.textContent.includes('the')) {
//         paragraph.remove()
//     }
// })

let todos = []

const filters = {
    searchText: '',
    hideCompleted: false
}

let todosJSON = localStorage.getItem('todos')
if (todosJSON) {
    todos = JSON.parse(todosJSON)
}

// You have 2 todos left
// Print a paragraph for each todo above

// Event Listener
// document.querySelector('button').addEventListener('click', function (e) {
//     console.log('Add a new todo')
    
// })


// Setup a div container for tasks
// Setup filters and wire up a new filter input to change it
// Create a renderTodos function to render and rerender the latest filtered data

const renderTodos = function (todos, filters){
    let filteredTodos = todos.filter(todo => todo.text.toLowerCase().includes(filters.searchText.toLowerCase()))
    let todosLeft = filteredTodos.filter(todo => !todo.completed).length
    if(filters.hideCompleted) {
        filteredTodos = filteredTodos.filter(todo => !todo.completed)
    }

    document.querySelector('#todos').innerHTML = ''
    document.querySelector('#todo-count').textContent = `${todosLeft}`
    filteredTodos.forEach(todo => {
        let p = document.createElement('p')
        p.textContent = todo.text
        document.querySelector('#todos').append(p)
    })
}
document.querySelector('#search-text').addEventListener('input', function (e){
    filters.searchText = e.target.value
    renderTodos(todos, filters)
})

// Create a new form with a single input for the todo text
// Set up a submit handler and cancel the default action
// Add a new item to the todos array with that text data, with completed value as false
// Rerender the application
// Clear the input field value

document.querySelector('#add-todo-form').addEventListener('submit', function (e) {
    e.preventDefault()
    let newTodo = {
        text: e.target.elements.todoText.value,
        completed: false
    }
    todos.push(newTodo)
    localStorage.setItem('todos', JSON.stringify(newTodo))
    // e.target.elements.todoText.value = ''
    e.target.reset()
    renderTodos(todos, filters)
})

// Create a checkbox and setup event listener -> "hide completed"
// Create a new hideCompleted filter (default false)
// Update hideCompleted and rerender list on checkbox change
// Setup rerender todos to hide completed items

document.querySelector('#hideCompleted').addEventListener('change', function (e) {
    filters.hideCompleted = e.target.checked
    renderTodos(todos, filters)
})

renderTodos(todos, filters)