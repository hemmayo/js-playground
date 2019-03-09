let myBook = {
    title: '1002',
    author: 'Mark Scheneda',
    pageCount: 326
}

let otherBook = {
    title: 'A Peoples History',
    author: 'Howard Zinn',
    pageCount: 771
}

let getSummary = (book) => {
    // console.log(`${book.title} by ${book.author}`)
    return {
        summary: `${book.title} by ${book.author}`,
        pageCountSummary: `${book.title} is ${book.pageCount} long.`
    }
}

let bookSummary = getSummary(myBook)
let otherBookSummary = getSummary(otherBook)

console.log(bookSummary.pageCountSummary)
console.log(otherBookSummary.summary)

// Create a function that takees Fahrenheit and returns all with celsius and kelvin

let convert = (fahrenheit) => {
    let celsius = (fahrenheit - 32) * (5 / 9)
    let kelvin = (fahrenheit + 459.67) * (5 / 9)
    return {
        fahrenheit,
        celsius,
        kelvin
    }
}

console.log(convert(82))