var listElement = document.querySelector('#app ul');
var inputElement  = document.querySelector('#app input');
var buttonElement  = document.querySelector('#app button');





readFromStorage();


renderTodos(); 

function renderTodos() {
    listElement.innerHTML = '';
    for(todo  of todos){
        var item = document.createElement('li');
        var textElement = document.createTextNode(todo);

        var linkElement = document.createElement('a');
        var linkText = document.createTextNode('Excluir');
        linkElement.setAttribute('href', '#');

        var pos = todos.indexOf(todo);
        linkElement.setAttribute('onclick', 'deleteTodo(' + pos + ')')
        

        linkElement.appendChild(linkText);

        item.appendChild(textElement);
        item.appendChild(linkElement);
        listElement.appendChild(item);

    }
}

function addTodo(){
    var todoText = inputElement.value;

    todos.push(todoText);
    inputElement.value = '';
    renderTodos();
    saveToStorage();
}

function deleteTodo(position){
    todos.splice(position, 1);

    renderTodos();
    saveToStorage();
}

buttonElement.onclick = addTodo;

function saveToStorage(){
    localStorage.setItem('list_todos', JSON.stringify(todos));
}

function readFromStorage(){
    todos = JSON.parse(localStorage.getItem('list_todos')) || [];
}