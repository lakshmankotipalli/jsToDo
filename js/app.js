var toDoObj = {};
var toDoList = [];

function addToDo() {
    toDoObj.todo = document.getElementById('toDoInput').value;
    toDoObj.completed = false;
    toDoList.push(toDoObj);
    toDoObj = {};
    console.log(toDoList);
    document.getElementById('toDoInput').value = '';
    toDoList.forEach(function (value, index) {
        console.log(value);
        document.getElementById('addedToDo').innerHTML = value.todo;
    });
}



