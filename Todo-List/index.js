const todoList = [{
    name: 'watch movies',
    dueDate: "12-12-24"
}];


let todoListHTML = ``;
function renderTodoList() {
    todoListHTML='';
    let html='';
    todoList.forEach((listObject, i) => {
        const {name,dueDate}=listObject;
       html=`
        <div>${name}</div>
        <div>${dueDate}</div>
        <button class="delete-button" onclick="deleteList(${i})">Delete</button>
        `;
        todoListHTML+=html;
    });
    document.querySelector('.todo-list').innerHTML=todoListHTML;
}

function deleteList(i)
{
   todoList.splice(i,1);
   renderTodoList();
}

function addTodo() {
    const inputElement = document.querySelector('.input-name');
    const dateElement = document.querySelector('.input-date');

    const name = inputElement.value;
    const dueDate = dateElement.value;
    if (name && dueDate) {
        todoList.push({
            name,
            dueDate
        });

        inputElement.value="";
    }
    else
    {
        window.alert("Enter both todo and due date");
    }
    console.log(todoList);
    renderTodoList();

}
renderTodoList();