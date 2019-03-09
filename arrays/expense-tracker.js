const account = {
    name: 'Emmanuel Popoola',
    expenses: [],
    income: [],
    addExpense: function (description, amount) {
        this.expenses.push({ description, amount })
    },
    addIncome: function (description, amount) {
        this.income.push({ description, amount })
    },
    getAccountSummary: function () {
        let totalExpenses = 0
        let totalIncome = 0
        this.expenses.forEach(expense => {
            totalExpenses += expense.amount 
        });
        this.income.forEach(income => {
            totalIncome += income.amount 
        });
        let balance = totalIncome - totalExpenses
        return `${account.name} has a balance of $${balance}. $${totalIncome} in income, $${totalExpenses} in expenses.`
    }
}
// Expense -> description, amount
// Add expense -> description, amount
// getAccountSummary -> total up all expenses -> Emma Popoola has $1,250 in expenses.
// Add income array to account
// addIncome method -> description, amount
// Tweak getAccountSummary -> Emma Popoola has a balance of $10. $100 in income, $90 in expenses

account.addIncome('Salary', 1050)
account.addExpense('Rent', 950)
account.addExpense('Coffee', 2)

console.log(account.getAccountSummary())
