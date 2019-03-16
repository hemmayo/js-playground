// Create constructor for hangman game
// Setup attributes for the word itself and the number of guesses allowed
// Create two instances of it and print both to the console

// Setup the word instance property as an array of lower case letters
// Setup another instance property to store guessed letters
// Create a method that gives you the word puzzle back

// No guesses -> ***
// Guessed "c", "b", "t" -> c*t

const Hangman = function (word, remainingGuesses) {
    word = word.toLowerCase().split('')
    this.word = word
    this.guesses = []
    this.remainingGuesses = remainingGuesses
}

Hangman.prototype.getPuzzle = function () {
    let word = this.word
    let mergedWords = ''
    
    word.forEach((letter) => {
        if (this.guesses.includes(letter) || letter === ' ') {
            mergedWords += letter
        } else {
            mergedWords += '*'
        }
    })

    return mergedWords
}

const game1 = new Hangman('Caterpiller Boy', 3)
// const game2 = new Hangman('cat', 3)

console.log(game1.getPuzzle())