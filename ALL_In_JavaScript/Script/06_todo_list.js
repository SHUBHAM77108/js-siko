// const todoList = [];

renderTodoList();

function renderTodoList() {
    let todoListHtml = '';
    let retrivetodolist = JSON.parse(localStorage.getItem('todoList')) || [];
    for(let i = 0; i < retrivetodolist.length; i++) {
        const todoObject = retrivetodolist[i];
        const name = todoObject.name;
        const duedate = todoObject.duedate;
        const html = `<div>${name}</div> 
        <div>${duedate}</div>
        <button onclick="
            removeTodoListOnLocal(${i});
            renderTodoList();
            " class="delete-todo-button">Delete</button>`;
        todoListHtml += html;
    };

    document.querySelector('.js-todo-list').innerHTML = todoListHtml;
}

document.querySelector('.add-todo-button').addEventListener('click', ()=> {
    addTodo();
});

function addTodo() {
    const getTodoName = document.querySelector('.js-name-input');
    const getDuedate = document.querySelector('.js-due-date-input');

    // let retrivetodolist = JSON.parse(localStorage.getItem('todoList'));

    const duedate = getDuedate.value;

    const name = getTodoName.value;

    let todoList = JSON.parse(localStorage.getItem('todoList')) || [];

    todoList.push({
        //name: name, //if the property and variable name are same we use one shortcut, only type property
        //duedate: duedate //
        name,
        duedate
    });

    localStorage.setItem('todoList',JSON.stringify(todoList));

    getTodoName.value = '';
    getDuedate.value = '';

    renderTodoList()
}

// function updateTodoListOnLocal() {
//     localStorage.setItem('todoList',JSON.stringify(todoList));
// }

function removeTodoListOnLocal(indexValue) {
    let retrivetodoListToLocal = JSON.parse(localStorage.getItem('todoList'));

    if (retrivetodoListToLocal) {
        retrivetodoListToLocal.splice(indexValue, 1);

        localStorage.setItem('todoList', JSON.stringify(retrivetodoListToLocal));
    }
}