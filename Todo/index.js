let enterButton = document.getElementById("enter");
let input = document.getElementById("userInput");
let ul = document.querySelector("ul");

function getInputLength() {
  return input.value.length;
}

function createListElement() {
    
    const listElements = document.getElementsByTagName("li");
    for (let list of listElements){
        const innertext = list.innerText;
        const todo = innertext.substring(0,innertext.indexOf('\n'));
        if(todo.toLocaleLowerCase()===input.value.toLocaleLowerCase()){
                alert("same TODO",input.value);
                input.value = " ";
                return;
        }
    }



    
    let li = document.createElement("li");
    li.appendChild(document.createTextNode(input.value));
    ul.appendChild(li);
  input.value = "";

  function crossOut(){
    li.classList.toggle("done");
    
}


  li.addEventListener("click", crossOut);
  
li.addEventListener('dblclick', function() {
    li.classList.toggle('strikethrough');
  });
  let deleteBtn = document.createElement("button");
  deleteBtn.appendChild(document.createTextNode("X"));
  deleteBtn.style.backgroundColor = "red";
  li.appendChild(deleteBtn);
  deleteBtn.addEventListener("click", deleteListItem);

  function deleteListItem() {

    li.classList.toggle("delete");
  }
  
}

function addListAfterClick() {

    if(getInputLength() > 0) {

    createListElement();
    
  }
}

function addListAfterKeyPress(event) {
  if(getInputLength() > 0 && event.key === "Enter") {
  createListElement();

  }

}

enterButton.addEventListener("click", addListAfterClick);
input.addEventListener("keypress", addListAfterKeyPress);


document.addEventListener("DOMContentLoaded", function() {
    const todoList = document.querySelector(".listItems ul");
    const completedList = document.getElementById("todo-list");

    todoList.addEventListener("click", function(event) {
        if (event.target.tagName === "LI") {
            const listItem = event.target;
            listItem.classList.toggle("completed");
            if (listItem.classList.contains("completed")) {
                // Move the completed item to the completed list
                completedList.appendChild(listItem);
            } else {
                // Move the incomplete item back to the todo list
                todoList.appendChild(listItem);
            }
        }
    });

    
 });
 