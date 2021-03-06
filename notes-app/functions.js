'use strict'
// Read exxisting notes from local storage
const getSavedNotes = () => {
    let notesJSON = localStorage.getItem('notes')
    try {
        return (notesJSON) ? JSON.parse(notesJSON) : []
    } catch (error) {
        return []
    }
}

// Remove note
const removeNote = (id) => {
    const noteIndex = notes.findIndex((note) => note.id === id)
    if (noteIndex > -1) {
        notes.splice(noteIndex, 1)
    }
    saveNotes(notes)
}

// Generate notes dom
const generateNoteDOM = (note) => {
    const noteEl = document.createElement('div')
    const textEl = document.createElement('a')
    const button = document.createElement('button')

    // Setup the remove note button
    button.textContent = 'x'
    button.addEventListener('click', function () {
        console.log(note)
        removeNote(note.id)
        renderNotes(notes, filters)
    })
    noteEl.append(button)

    // Setup the note title text
    textEl.textContent = note.title.length > 0 ? note.title : 'Unnamed note'
    textEl.setAttribute('href', `edit.html#${note.id}`)

    noteEl.append(textEl)
    return noteEl
}

// Render application notes
const renderNotes = (notes, filters) => {
    document.querySelector('#notes').innerHTML = ''
    if(notes.length > 0) {
        let filteredNotes = notes.filter(note => note.title.toLowerCase().includes(filters.searchText.toLowerCase()))
        switch (filters.filterBy) {
            case 'alphabetical':
                filteredNotes = filteredNotes.sort((a, b)=>{
                    return (a.title < b.title) ? -1 : (a.title > b.title) ? 1 : 0
                })
                break;
            case 'edited':
                filteredNotes = filteredNotes.sort((a, b) => {
                    return (a.updatedAt > b.updatedAt) ? -1 : (a.updatedAt < b.updatedAt) ? 1 : 0
                })
                break;
            case 'recent':
                filteredNotes = filteredNotes.sort((a, b) => {
                    return (a.createdAt > b.createdAt) ? -1 : (a.createdAt < b.createdAt) ? 1 : 0
                })
                break;
        
            default:
                break;
        }
        filteredNotes.forEach(note => {
            const p = generateNoteDOM(note)
            document.querySelector('#notes').append(p)
        })
    } 
    
}

// Save notes to local storage
const saveNotes = (notes) => {
    localStorage.setItem('notes', JSON.stringify(notes))
}