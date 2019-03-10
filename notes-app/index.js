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


let notes = []

const filters = {
    searchText: '',
    filterBy: ''
}

let notesJSON = localStorage.getItem('notes')
if (notesJSON){
    notes = JSON.parse(notesJSON)
}

const renderNotes = function (notes, filters) {
    if(notes.length > 0) {
        let filteredNotes = notes.filter(note => note.title.toLowerCase().includes(filters.searchText.toLowerCase()))
        switch (filters.filterBy) {
            case 'alphabetical':
                filteredNotes = filteredNotes.sort((a, b)=>{
                    return (a.title < b.title) ? -1 : (a.title > b.title) ? 1 : 0
                })
                break;
            case 'edited':
                
                break;
            case 'recent':
                
                break;
        
            default:
                break;
        }
        document.querySelector('#notes').innerHTML = ''
        filteredNotes.forEach(note => {
            const p = document.createElement('p')
            p.textContent = note.title.length > 0 ? note.title : 'Unnamed note'
            document.querySelector('#notes').append(p)
        })
    } 
    
}

document.querySelector('#create-note').addEventListener('submit', function (e) {
    e.preventDefault()
    notes.push({ title: e.target.elements.title.value , body:e.target.elements.body.value })
    localStorage.setItem('notes', JSON.stringify(notes))
    renderNotes(notes, filters)
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
renderNotes(notes, filters)
