// Create constructor for hangman game
// Setup attributes for the word itself and the number of guesses allowed
// Create two instances of it and print both to the console

// Setup the word instance property as an array of lower case letters
// Setup another instance property to store guessed letters
// Create a method that gives you the word puzzle back

// No guesses -> ***
// Guessed "c", "b", "t" -> c*t

class Hangman {
    constructor (word, remainingGuesses) {
        word = word.toLowerCase().split('')
        this.word = word
        this.guesses = []
        this.remainingGuesses = remainingGuesses
        this.status = 'Playing'
    }
    get puzzle () {
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
    guess (letter) {
        letter = letter.toLowerCase()
        const isUnique = (!this.guesses.includes(letter) || letter !== ' ') && this.remainingGuesses > 0 
        if (isUnique && this.getStatus().toLowerCase() === 'playing') {
            this.guesses.push(letter)
            if (!this.word.includes(letter)) {
                this.remainingGuesses--
            }
        }
    }
    getStatus () {
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
    get statusMessage () {
        const status = this.getStatus().toLowerCase()
        return status === 'failed' ? `Nice try! The word was '${this.word.join('')}'.` : status === 'finished' ? 'Great work! You guessed the word.' : `Guesses left: ${this.remainingGuesses}`
    }
}
