let todoList = [];
displayItems()

function  addTodo(){
  let inputElement = document.querySelector('#todo-input');
  let todoItem = inputElement.value;
  todoList.push(todoItem);
  inputElement.value = '';
  displayItems()
  
}

function displayItems() {
  let containerElement = document.querySelector('.item-container');

  let newHTML
  displayElement.innerText = " ";
  for(let i=0; i<todoList.length; i++)
    displayElement.innerText = displayElement.innerText + "\n" + todoList[i];
     
} 