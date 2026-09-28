const expenseForm = document.querySelector("#expenseForm");
const expenseName = document.querySelector("#expenseName");
const expenseAmount = document.querySelector("#expenseAmount");
const expenseCategory = document.querySelector("#expenseCategory");
const totalExpense = document.querySelector("#totalExpense");
const expenseList = document.querySelector("#expenseList");

let total = 0;

expenseForm.addEventListener("submit", function (event) {
    event.preventDefault();

    total += Number(expense.amount);
    totalExpense.textContent = total;


    const expense = {
        name: expenseName.value,
        amount: expenseAmount.value,
        category: expenseCategory.value
    }
    const li = document.createElement('li')

    li.textContent = `${expense.name} - ${expense.amount} - ${expense.category}`

    const deleteBtn = document.createElement('button');
    
    deleteBtn.textContent = "Delete";
    deleteBtn.addEventListener("click", function (event) {
        event.target.parentElement.remove();
    })

    li.appendChild(deleteBtn);

    expenseList.appendChild(li)
})



