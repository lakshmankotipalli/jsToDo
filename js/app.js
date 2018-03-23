var toDoObj = {todo:'', completed: false};
var toDoList = [];

function addToDo() {
    if(document.getElementById('toDoInput').value != "") {
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
    } else {
        alert('Nothing to do? Give it a thought!!');
    }
    
}



