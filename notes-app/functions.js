// Read exxisting notes from local storage
const getSavedNotes = function () {
    let notes = []
    let notesJSON = localStorage.getItem('notes')
    if (notesJSON){
        notes = JSON.parse(notesJSON)
    }
    return notes
}

// Generate notes dom
const generateNoteDOM = function (note) {
    const p = document.createElement('p')
    p.textContent = note.title.length > 0 ? note.title : 'Unnamed note'
    return p
}

// Render application notes
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
            const p = generateNoteDOM(note)
            document.querySelector('#notes').append(p)
        })
    } 
    
}

// Save notes to local storage
const saveNotes = function (notes) {
    localStorage.setItem('notes', JSON.stringify(notes))
}