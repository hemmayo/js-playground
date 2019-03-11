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

// generate new todo dom
const generateTodoDOM = function (todo) {
    let p = document.createElement('p')
    p.textContent = todo.text
    return p
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
        document.querySelector('#todos').append(p)
    })
}

