// DOM - Document Object Model
// Query and remove
// const p = document.querySelector('p')
// p.remove()

// Query all and remove
// const ps = document.querySelectorAll('p')
// ps.forEach(p => {
//     p.textContent = '******'
//     // p.remove()
// });
// const newParagraph = document.createElement('p')
// newParagraph.textContent = "hello world"
// document.querySelector('body').appendChild(newParagraph)


let notes = getSavedNotes()

const filters = {
    searchText: '',
    filterBy: ''
}

document.querySelector('#create-note').addEventListener('submit', (e) => {
    e.preventDefault()
    const id = uuidv4()
    const createdAt = moment().valueOf()
    let updatedAt = createdAt
    notes.push({ id, title: e.target.elements.title.value , body:e.target.elements.body.value, createdAt, updatedAt })
    saveNotes(notes)
    renderNotes(notes, filters)
    location.assign(`edit.html#${id}`)
    e.target.reset()
})


document.querySelector('#search-text').addEventListener('input', (e) => {
    filters.searchText = e.target.value
    renderNotes(notes, filters)
})

document.querySelector('#clear-notes').addEventListener('click', (e) => {
    localStorage.removeItem('notes')
    window.location.reload()
})

document.querySelector('#filter-by').addEventListener('change', (e) => {
    filters.filterBy = e.target.value
    renderNotes(notes, filters)
})

window.addEventListener('storage', (e) => {
    if (e.key === 'notes') {
        notes = JSON.parse(e.newValue)
        renderNotes(notes, filters)
    }
})
renderNotes(notes, filters)

// Dates - moment
// const date = moment().year(2000).month('Feb').day(5)
// const date = moment('20 February 2000')
// console.log(date.valueOf())