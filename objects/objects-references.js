let myAccount = {
    name: 'Emma Popoola',
    expenses: 0,
    income: 0
}

let addExpense = (account, amount) => {
    account.expenses += amount
}

let addIncome = (account, amount) => {
    account.income += amount
}

let resetAccount = (account) => {
    account.expenses = 0
    account.income = 0
}

let getAccountSummary = (account) => {
    return `Account for ${account.name} has $${account.income - account.expenses}. $${account.income} in income. $${account.expenses} in expenses.`
}

addIncome(myAccount, 1000)
addExpense(myAccount, 200)
addExpense(myAccount, 90)
console.log(getAccountSummary(myAccount))
resetAccount(myAccount)
console.log(getAccountSummary(myAccount))

// console.log(myAccount)