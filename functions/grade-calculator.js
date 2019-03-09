let studentScore = 19
let maxScore = 20

let getPercentage = (studentScore, maxScore) => {
    return (studentScore / maxScore) * 100
}
let getGrade = (score) => {
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

let score = getPercentage(studentScore, maxScore)
let grade = getGrade(score)

console.log(`You got an ${grade} (${score}%)`)

// console.log(getGrade(getPercentage(studentScore, maxScore)))