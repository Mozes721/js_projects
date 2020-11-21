//Selectors
const form = document.querySelector('form');
const btnSub = document.getElementById('submit')
const tbodyEL = document.querySelector('tbody');
const tableEL = document.querySelector('table');

//Eve></th>nt listener
// document.addEventListener("DOMContentLoaded", getExpenses);


function onAddExpenses(e) {
    e.preventDefault();
    
    const expenseName = document.getElementById('name').value;
    const expenseDate = document.getElementById('date').value;
    const  expenseAmount= document.getElementById('amount').value;
    tbodyEL.innerHTML += `
    <tr>
        <td>${expenseName}</td>
        <td>${expenseDate}</td>
        <td>${expenseAmount}</td>
        <td><button class="delete_Btn">X</button></td>
    </tr>
    `;
}

function onDeleteRow(e) {
    if (!e.target.classList.contains('delete_Btn')){
        return;
    }
    const btn = e.target;
    btn.closest('tr').remove();
}

btnSub.addEventListener("click", onAddExpenses);
tableEL.addEventListener("click", onDeleteRow);







// function addExpense(e) {
//     e.preventDefault();
//     alert("It works");
//     //new tr and td's
//     const createTbody = document.createElement("tbody");
//     createTbody.className.add("tr");

//     const newTd = document.createElement("td");
    

//     newTd.innerText = expenseName.value;
//     createTbody.appendChild(newTd);
//     newTd.innerText = expenseDate.value;
//     createTbody.appendChild(newTd);
//     newTd.innerText = expenseAmount.value;
//     createTbody.appendChild(newTd);

    
    


// }