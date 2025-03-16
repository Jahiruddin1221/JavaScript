let todoList = [];
displayItem();

function addTodo() {
    let inputElement = document.querySelector('#todo_input');
    let todoItem = inputElement.value;
    todoList.push(todoItem);
    inputElement.value = '';
    displayItem();
}


function displayItem() {
    let containerElement = document.querySelector('todo_container');
    
                                let newHtml = '';
                                for(let i = 0; i < todoList.length; i++) {
                                    newHtml += `
                                    <p>${todoList[i]}</p>
                                    <button>Delete</button>
         `;
    }
    containerElement.innerHTML = newHtml;
}