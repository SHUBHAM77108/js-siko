const todoList = [{
    name: 'wash Dishes',
    duedate: '2022-12-22'
}];

renderTodoList();

function renderTodoList() {
    let todoListHtml = '';
    for(let i = 0; i < todoList.length; i++) {
        const todoObject = todoList[i];
        const name = todoObject.name;
        const duedate = todoObject.duedate;
        const html = `<div>${name}</div> 
        <div>${todoObject.duedate}</div>
        <button onclick="
            todoList.splice(${i}, 1);
            renderTodoList();
            " class="delete-todo-button">Delete</button>`;
        todoListHtml += html;
    };

    console.log(todoListHtml);

    document.querySelector('.js-todo-list').innerHTML = todoListHtml;
}


function addTodo() {
    const getTodoName = document.querySelector('.js-name-input');
    const getDuedate = document.querySelector('.js-due-date-input');

    const duedate = getDuedate.value;

    const name = getTodoName.value;

    todoList.push({
        //name: name, //if the property and variable name are same we use one shortcut, only type property
        //duedate: duedate //
        name,
        duedate
    });

    getTodoName.value = '';
    renderTodoList()
}