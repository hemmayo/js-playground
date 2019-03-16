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

document.querySelector('#create-note').addEventListener('submit', function (e) {
    e.preventDefault()
    let id = uuidv4()
    notes.push({ id, title: e.target.elements.title.value , body:e.target.elements.body.value })
    saveNotes(notes)
    renderNotes(notes, filters)
    location.assign(`edit.html#${id}`)
    e.target.reset()
})


document.querySelector('#search-text').addEventListener('input', function (e) {
    filters.searchText = e.target.value
    renderNotes(notes, filters)
})

document.querySelector('#clear-notes').addEventListener('click', function (e) {
    localStorage.removeItem('notes')
    window.location.reload()
})

document.querySelector('#filter-by').addEventListener('change', function (e) {
    filters.filterBy = e.target.value
    renderNotes(notes, filters)
})

window.addEventListener('storage', function (e) {
    if (e.key === 'notes') {
        notes = JSON.parse(e.newValue)
        renderNotes(notes, filters)
    }
})
renderNotes(notes, filters)

// Dates - moment
// const date = moment().year(2000).month('Feb').day(5)
// console.log(date.format('MMMM D, YYYY'))