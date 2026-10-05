const expenseForm = document.querySelector("#expenseForm");
const expenseName = document.querySelector("#expenseName");
const expenseAmount = document.querySelector("#expenseAmount");
const expenseCategory = document.querySelector("#expenseCategory");
const totalExpense = document.querySelector("#totalExpense");
const expenseList = document.querySelector("#expenseList");

const expenses = JSON.parse(localStorage.getItem("expenses")) || [];

let total = 0;


// Add Expense
expenseForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const expense = {
        name: expenseName.value,
        amount: expenseAmount.value,
        category: expenseCategory.value
    };

    expenses.push(expense);

    localStorage.setItem(
        "expenses",
        JSON.stringify(expenses)
    );

    total += Number(expense.amount);
    totalExpense.textContent = total;

    displayExpense(expense);

    expenseForm.reset();
});


// Display saved expenses after refresh
expenses.forEach(function (expense) {

    displayExpense(expense);

    total += Number(expense.amount);
});

totalExpense.textContent = total;


// Display Expense Function
function displayExpense(expense) {

    const li = document.createElement("li");

    li.textContent = `${expense.name} - ${expense.amount} - ${expense.category}`;

    const deleteBtn = document.createElement("button");

    deleteBtn.textContent = "Delete";


    // Delete Expense
    deleteBtn.addEventListener("click", function (event) {

        total -= Number(expense.amount);
        totalExpense.textContent = total;

        event.target.parentElement.remove();


        // Remove expense from array
        const updatedExpenses = expenses.filter(function (item) {
            return item.amount !== expense.amount;
        });


        // Update localStorage
        localStorage.setItem(
            "expenses",
            JSON.stringify(updatedExpenses)
        );

    });


    li.appendChild(deleteBtn);

    expenseList.appendChild(li);
}


