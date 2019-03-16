// get saved todos
const getSavedTodos = () => {
    let todos = []
    let todosJSON = localStorage.getItem('todos')
    if (todosJSON) {
        todos = JSON.parse(todosJSON)
    }
    return todos
}

// save todos
const saveTodos = (todos) => {
    localStorage.setItem('todos', JSON.stringify(todos))
}

// Toggle todo
const toggleTodo = (id) => {
    let index = todos.findIndex((todo) => todo.id === id)
    todos[index].completed = !todos[index].completed
}

// remove todo
const removeTodo = (id) => {
    let index = todos.findIndex((todo) => todo.id === id)
    todos.splice(index, 1)
}

// generate new todo dom
const generateTodoDOM = (todo) => {
    // Setup a root div
    // Setup and append a checkbox (set type attribute)
    // Setup and append a span (set text)
    // Setup and append a button (set text)
    const div = document.createElement('div')
    const checkbox = document.createElement('input')
    const text = document.createElement('span')
    const button = document.createElement('button')

    checkbox.setAttribute('type', 'checkbox')
    checkbox.checked = todo.completed
    checkbox.addEventListener('change', function () {
        toggleTodo(todo.id)
        saveTodos(todos)
        renderTodos(todos, filters)
    })

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
const generateSummary = (todos) => {
    let todosLeft = todos.filter(todo => !todo.completed).length
    document.querySelector('#todo-count').textContent = `${todosLeft}`
}

// filter todos
const filterTodos = (todos, filters) => {
    let filteredTodos = todos.filter(todo => todo.text.toLowerCase().includes(filters.searchText.toLowerCase()))
    
    if(filters.hideCompleted) {
        filteredTodos = filteredTodos.filter(todo => !todo.completed)
    }
    return filteredTodos
}

// render todos
const renderTodos = (todos, filters) => {
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
