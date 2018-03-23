document.body.onload = addElement;

var toDoObj = {};
var toDoList = [];

function addToDo() {
    if(document.getElementById('toDoInput').value != "") {
        toDoObj.todo = document.getElementById('toDoInput').value;
        toDoObj.completed = false;
        toDoList.push(toDoObj);
        toDoObj = {};
        console.log(toDoList);
        document.getElementById('toDoInput').value = '';
        createToDoList(toDoList);
    } else {
        alert('Nothing to do? Give it a thought!!');
    }
}

    var listElement = createToDoList(toDoList);
    document.getElementById('board').appendChild(listElement);

function createToDoList (toDoList) {
    var list = document.createElement('ul');
    for(var i=0; i<toDoList.length;i++) {
        var listItem = document.createElement('li');
        listItem.appendChild(document.createTextNode(toDoList[i].todo));
        list.appendChild(listItem);
    }
    return list;
}

function addElement () {
    var heading = document.createElement("h2");
    var txt = document.createTextNode("ToDo App with JS");
    heading.appendChild(txt);
    var currentDiv = document.getElementById('dabba');
    document.body.insertBefore(heading, currentDiv);
}