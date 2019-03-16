const getTip = (amount) => {
    if (typeof amount === 'number') {
        return amount * .25
    } else {
        throw Error('Argument must be a number')
    }
}

try {
    const tip = getTip('2s99')
    console.log(tip)
} catch (error) {
    console.log('An error occured')
}
