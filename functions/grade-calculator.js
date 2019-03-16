let studentScore = 'k'
let maxScore = 20

let getPercentage = (studentScore, maxScore) => {
    if (typeof studentScore === 'number' && typeof maxScore === 'number') {
        return (studentScore / maxScore) * 100
    } else {
        throw Error('Arguments must be a number')
    }
    
}
let getGrade = (score) => {
    if (typeof score !== 'number') {
        throw Error('Score must be a number')
    }
    let grade;

    if (score >= 90 && score <= 100) {
        grade = 'A'
    } else if (score >= 80 && score <= 89) {
        grade = 'B'
    } else if (score >= 70 && score <= 79) {
        grade = 'C'
    } else if (score >= 60 && score <= 69) {
        grade = 'D'
    } else if (score >= 50 && score <= 59) {
        grade = 'F'
    } else {
        grade = 'Invalid Score'
    }
    return grade;
}

try {
    let score = getPercentage(studentScore, maxScore)
    let grade = getGrade(score)
    console.log(`You got an ${grade} (${score}%)`)
} catch (e) {
    console.log('Error oo!')
}




// console.log(getGrade(getPercentage(studentScore, maxScore)))