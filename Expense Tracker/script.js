const expenseForm = document.querySelector("#expenseForm");
const expenseName = document.querySelector("#expenseName");
const expenseAmount = document.querySelector("#expenseAmount");
const expenseCategory = document.querySelector("#expenseCategory");
const totalExpense = document.querySelector("#totalExpense");
const expenseList = document.querySelector("#expenseList");



expenseForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const expense = {
        name: expenseName.value,
        amount: expenseAmount.value,
        category: expenseCategory.value
    }

    const li = document.createElement('li')

    li.textContent = `${expense.name} - ${expense.amount} - ${expense.category}`

    expenseList.appendChild(li)
})

