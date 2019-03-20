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
    this.status = 'Playing'
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

Hangman.prototype.guess = function (letter) {
    letter = letter.toLowerCase()
    const isUnique = (!this.guesses.includes(letter) || letter !== ' ') && this.remainingGuesses > 0 
    if (isUnique) {
        this.guesses.push(letter)
        this.remainingGuesses--
    }
}

Hangman.prototype.getStatus = function () {
    const isPlaying = this.remainingGuesses > 0
    const isFinished = !isPlaying && this.word.every((letter) => this.guesses.includes(letter))
    const isFailed = !isPlaying && !isFinished
    // let existsWrongGuess = false

    // this.guesses.forEach((guess) => {
    //     existsWrongGuess = existsWrongGuess || !this.word.includes(guess)
    // })
    
    // const isFailed = !isPlaying && existsWrongGuess
    // const isFinished = !isPlaying && !existsWrongGuess

    return isFinished ? 'Finished' : isFailed ? 'Failed' : 'Playing'
}
