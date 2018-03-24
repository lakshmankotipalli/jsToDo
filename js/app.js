document.body.onload = createTaskSpace;

// Global Variables
var toDoObj = {};
var toDoList = [];
var list = document.createElement('ul');


// Appending the UL to the section 'board'
function createTaskSpace () {
    document.getElementById('board').appendChild(list);
}

// Adding todo into the todoList array
function addToDo() {
    if(document.getElementById('toDoInput').value != "") {
        toDoObj.todo = document.getElementById('toDoInput').value;
        toDoObj.completed = false;
        toDoList.push(toDoObj);
        toDoObj = {};
        console.log(toDoList);
        document.getElementById('toDoInput').value = '';
        createToDoList(toDoList);
        toDoList = [];
    } else {
        alert('Nothing to do? Give it a thought!!');
    }
}

// Creating tasks as 'li' items into the already create UL
function createToDoList (toDoList) {
    for(var i=0; i<toDoList.length;i++) {
        var listItem = document.createElement('li');
        listItem.innerHTML = toDoList[i].todo;
        list.appendChild(listItem);
    }
}