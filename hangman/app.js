let game
const puzzleElement = document.querySelector('#puzzle')
const status = document.querySelector('#status')

window.addEventListener('keypress', function (e) {
    game.guess(e.key)
    puzzleElement.textContent = game.puzzle
    status.textContent = game.statusMessage
})

const request = new XMLHttpRequest()
request.addEventListener('readystatechange', function (e) {
    if (e.target.readyState === 4 && e.target.status === 200) {
        let data = []
        try {
            data = JSON.parse(e.target.responseText)
            game = new Hangman(data.puzzle, 5)
            puzzleElement.textContent = game.puzzle
            status.textContent = game.statusMessage
        } catch (e) {
            status.textContent = 'Unavailable'
        }
    }
})
request.open('GET', 'http://puzzle.mead.io/puzzle')
request.send()

