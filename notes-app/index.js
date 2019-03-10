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


const notes = [
    {
        title: 'How to push to github without git',
        body: 'hmmm..'
    }, {
        title: 'My super recipe',
        body: 'I will try to cook plantain'
    }, {
        title: 'My next trip',
        body: 'I want to travel'
    }
]

const filters = {
    searchText: '',
    filterBy: ''
}

const renderNotes = function (notes, filters) {
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
        p.textContent = note.title
        document.querySelector('#notes').append(p)
    })
}

document.querySelector('#create-note').addEventListener('click', function (e) {
    e.target.textContent = 'The button was clicked'
})


document.querySelector('#search-text').addEventListener('input', function (e) {
    filters.searchText = e.target.value
    renderNotes(notes, filters)
})

document.querySelector('#filter-by').addEventListener('change', function (e) {
    filters.filterBy = e.target.value
    renderNotes(notes, filters)
})
renderNotes(notes, filters)
