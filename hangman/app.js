const game = new Hangman('Cat', 3)
const puzzleElement = document.querySelector('#puzzle')
const status = document.querySelector('#status')

window.addEventListener('keypress', function (e) {
    const guess = e.key
    game.guess(e.key)
    
    puzzleElement.textContent = game.getPuzzle()
    status.textContent = game.getStatusMessage()
})

puzzleElement.textContent = game.getPuzzle()
status.textContent = game.getStatusMessage()
