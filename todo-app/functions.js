// get saved todos
const getSavedTodos = function () {
    let todos = []
    let todosJSON = localStorage.getItem('todos')
    if (todosJSON) {
        todos = JSON.parse(todosJSON)
    }
    return todos
}

// save todos
const saveTodos = function (todos) {
    localStorage.setItem('todos', JSON.stringify(todos))
}

// remove todo
const removeTodo = function (id) {
    let index = todos.findIndex((todo) => todo.id === id)
    todos.splice(index, 1)
}

// generate new todo dom
const generateTodoDOM = function (todo) {
    // Setup a root div
    // Setup and append a checkbox (set type attribute)
    // Setup and append a span (set text)
    // Setup and append a button (set text)
    const div = document.createElement('div')
    const checkbox = document.createElement('input')
    const text = document.createElement('span')
    const button = document.createElement('button')

    checkbox.setAttribute('type', 'checkbox')
    text.textContent = todo.text
    button.textContent = 'x'
    button.addEventListener('click', function () {
        removeTodo(todo.id)
        renderTodos(todos, filters)
    })

    div.appendChild(checkbox)
    div.appendChild(text)
    div.appendChild(button)

    return div
}

// generate summary dom
const generateSummary = function (todos) {
    let todosLeft = todos.filter(todo => !todo.completed).length
    document.querySelector('#todo-count').textContent = `${todosLeft}`
}

// filter todos
const filterTodos = function (todos, filters) {
    let filteredTodos = todos.filter(todo => todo.text.toLowerCase().includes(filters.searchText.toLowerCase()))
    
    if(filters.hideCompleted) {
        filteredTodos = filteredTodos.filter(todo => !todo.completed)
    }
    return filteredTodos
}

// render todos
const renderTodos = function (todos, filters){
    let filteredTodos = filterTodos(todos, filters)
    generateSummary(filteredTodos)
    // debugger
    document.querySelector('#todos').innerHTML = ''
    filteredTodos.forEach(todo => {
        let p = generateTodoDOM(todo)
        // debugger
        document.querySelector('#todos').append(p)
    })
}
