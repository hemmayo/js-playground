const notes = [
    {
        title: 'New stuff',
        body: 'Buy new laptop'
    }, {
        title: 'Call ',
        body: 'Call babe'
    }, {
        title: 'Cook food',
        body: 'I will try to cook plantain'
    }
]

const sortNotes = function (notes) {
    notes.sort(function (a, b) {
        if (a.title.toLowerCase() < b.title.toLowerCase()) {
            return -1
        } else if(a.title.toLowerCase() > b.title.toLowerCase()){
            return 1
        } else{
            return 0
        }
    })
}
// console.log(notes.indexOf({title: 'New stuff', body: 'Buy new laptop'})) 
const find = notes.findIndex(function(item, index) {
    return item.title === 'Call '
})

console.log(find)
sortNotes(notes)
console.log(notes)