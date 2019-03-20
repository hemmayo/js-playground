const game = new Hangman('Car parts', 5)
const puzzleElement = document.querySelector('#puzzle')
const status = document.querySelector('#status')

window.addEventListener('keypress', function (e) {
    const guess = e.key
    game.guess(e.key)
    
    puzzleElement.textContent = game.puzzle
    status.textContent = game.statusMessage
})

puzzleElement.textContent = game.puzzle
status.textContent = game.statusMessage
