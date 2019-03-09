// Remove all p tags that have 'the' in the text
// let paragraphs = document.querySelectorAll('p')
// paragraphs.forEach(paragraph => {
//     if(paragraph.textContent.includes('the')) {
//         paragraph.remove()
//     }
// })

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

// You have 2 todos left
// Print a paragraph for each todo above

let todosLeft = todos.filter(todo => !todo.completed).length
let summary = document.createElement('h2')
summary.textContent = `You have ${todosLeft} todos left.`
document.querySelector('body').appendChild(summary)

todos.forEach(todo => {
    const p = document.createElement('p')
    p.textContent = todo.text
    document.querySelector('body').appendChild(p)

})

// Event Listener
// document.querySelector('button').addEventListener('click', function (e) {
//     console.log('Add a new todo')
    
// })

document.querySelector('button#add-todo').addEventListener('click', function (){
    console.log('Add a new todo')
})

document.querySelector('#new-todo-text').addEventListener('input', function (e) {
    console.log(e.target.value)
})
