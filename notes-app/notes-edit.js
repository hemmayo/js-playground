const titleElement = document.querySelector('#note-title')
const bodyElement = document.querySelector('#note-body')
const lastEdited = document.querySelector('#last-edited')
const removeButton = document.querySelector('#remove-note')
const noteId = location.hash.substring(1)
let notes = getSavedNotes()
let note = notes.find(note => note.id === noteId)

if (!note) {
    location.assign('index.html')
}

titleElement.value = note.title
bodyElement.value = note.body
lastEdited.textContent = `Last edited ${moment(note.updatedAt).fromNow()}`

titleElement.addEventListener('input', function (e) {
    note.title = e.target.value
    note.updatedAt = moment().valueOf()
    lastEdited.textContent = `Last edited ${moment(note.updatedAt).fromNow()}`
    saveNotes(notes)
})

bodyElement.addEventListener('input', function (e) {
    note.body = e.target.value
    note.updatedAt = moment().valueOf()
    lastEdited.textContent = `Last edited ${moment(note.updatedAt).fromNow()}`
    saveNotes(notes)
})

removeButton.addEventListener('click', function (e) {
    note.title = e.target.value
    removeNote(note.id)
    saveNotes(notes)
    location.assign('index.html')
})

window.addEventListener('storage', function (e) {
    if (e.key === 'notes') {
        notes = JSON.parse(e.newValue)
        let note = notes.find(note => note.id === noteId)

        if (!note) {
            location.assign('index.html')
        }

        titleElement.value = note.title
        bodyElement.value = note.body
        lastEdited.textContent = `Last edited ${moment(note.updatedAt).fromNow()}`
    }
})