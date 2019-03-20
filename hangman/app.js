const game = new Hangman('Cat', 3)
const puzzleElement = document.querySelector('#puzzle')
const guessesLeft = document.querySelector('#remainingGuesses')
const status = document.querySelector('#status')

window.addEventListener('keypress', function (e) {
    const guess = e.key
    game.guess(e.key)
    
    puzzleElement.textContent = game.getPuzzle()
    guessesLeft.textContent = game.remainingGuesses
    status.textContent = game.getStatus()
})

puzzleElement.textContent = game.getPuzzle()
guessesLeft.textContent = game.remainingGuesses
status.textContent = game.status
