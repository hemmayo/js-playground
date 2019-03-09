const notes = ['Note 1', 'Note 2', 'Note 3']
notes.push('My Note 4')
// notes.pop()
// notes.shift()
// notes.unshift('Note 1')

notes.splice(2, 1, 'This is the new third item')
console.log(notes.length, notes)

notes.forEach(function() {
    console.log('testing')
})