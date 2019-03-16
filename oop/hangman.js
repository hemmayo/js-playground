// Create constructor for hangman game
// Setup attributes for the word itself and the number of guesses allowed
// Create two instances of it and print both to the console

const Hangman = function (word, remainingGuesses) {
    this.word = word
    this.remainingGuesses = remainingGuesses
}

const game1 = new Hangman('cat', 3)
const game2 = new Hangman('cat', 3)

console.log(game1, game2)