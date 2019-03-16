'use strict'

// Remove all p tags that have 'the' in the text
// let paragraphs = document.querySelectorAll('p')
// paragraphs.forEach(paragraph => {
//     if(paragraph.textContent.includes('the')) {
//         paragraph.remove()
//     }
// })

let todos = getSavedTodos()

const filters = {
    searchText: '',
    hideCompleted: false
}



// You have 2 todos left
// Print a paragraph for each todo above

// Event Listener
// document.querySelector('button').addEventListener('click', (e) =>  {
//     console.log('Add a new todo')
    
// })


// Setup a div container for tasks
// Setup filters and wire up a new filter input to change it
// Create a renderTodos function to render and rerender the latest filtered data

document.querySelector('#search-text').addEventListener('input', (e) => {
    filters.searchText = e.target.value
    renderTodos(todos, filters)
})

// Create a new form with a single input for the todo text
// Set up a submit handler and cancel the default action
// Add a new item to the todos array with that text data, with completed value as false
// Rerender the application
// Clear the input field value

document.querySelector('#add-todo-form').addEventListener('submit', (e) =>  {
    e.preventDefault()
    let newTodo = {
        id: uuidv4(),
        text: e.target.elements.todoText.value,
        completed: false
    }
    todos.push(newTodo)
    saveTodos(todos)
    // e.target.elements.todoText.value = ''
    e.target.reset()
    renderTodos(todos, filters)
})

// Create a checkbox and setup event listener -> "hide completed"
// Create a new hideCompleted filter (default false)
// Update hideCompleted and rerender list on checkbox change
// Setup rerender todos to hide completed items

document.querySelector('#hideCompleted').addEventListener('change', (e) =>  {
    filters.hideCompleted = e.target.checked
    renderTodos(todos, filters)
})

renderTodos(todos, filters)