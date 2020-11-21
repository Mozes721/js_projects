const btnSub = document.getElementById('submit');
const btnClear = document.getElementById('clear');
const todo = document.getElementById('todo');
const toDoThink = document.getElementById('inputVal');




btnSub.addEventListener("click", addToDo);


function addToDo(e) {
    e.preventDefault();
   
    if (toDoThink.value.length === 0) 
    {
        alert("Please input a value!");
        return false;
         {
            return true;
        }
    }

    let item = document.createElement('li');
    item.classList.add('paragraph-styling');

    item.innerHTML = toDoThink.value;

    todo.appendChild(item);
    toDoThink.value = "";

    item.addEventListener("click", function(){
        item.style.textDecoration = "line-through";
    })
    
    item.addEventListener("dblclick", function(){
        todo.removeChild(item);
    })
}


btnClear.addEventListener("click", function(e) {
    list.parentNode.removeChild(list);
    
});





