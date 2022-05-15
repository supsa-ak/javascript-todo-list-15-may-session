const form = document.getElementById('form');
const input = document.getElementById('input');
const todoList = document.getElementById('todos');

const addTodo = (todo) => {
    let todoText = input.value;
    if(todo){
        todoText = todo.text;
    }
    if(todoText){
        const todoElement = document.createElement("li");
        if(todo && todo.completed){
            todoElement.classList.add("completed");
        }
        todoElement.innerText = todoText;
        todoElement.addEventListener("click", ()=>{
            todoElement.classList.add("completed");
        })

        todoElement.addEventListener("contextmenu", (e) => {
            e.preventDefault();
            todoElement.remove();
        })

        todoList.insertBefore(todoElement, todoList.firstChild);
        input.value = "";
    }
}

form.addEventListener("submit", (e) => {
    e.preventDefault();
    addTodo();
});