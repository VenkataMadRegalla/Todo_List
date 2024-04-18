const taskInput= document.getElementById("task-input");
const listContainer= document.getElementById("list-container");
function addTask(){
    if(taskInput.value === ''){
        alert("please add you task");
    }
    else{
        let li=document.createElement("li");
        li.innerHTML=taskInput.value;
        listContainer.appendChild(li);
        var buttonAdd= document.createElement("button");
        buttonAdd.innerHTML="done";
        li.appendChild(buttonAdd);
        let buttonRemove=document.createElement("button");
        buttonRemove.innerHTML="remove";
        buttonRemove.classList.add("removeButton");
        li.appendChild(buttonRemove);
    }
    taskInput.value="";
    saveData();
}
listContainer.addEventListener("click",function(e){
    if(e.target.innerHTML === 'done'){
        e.target.parentElement.classList.toggle("strikeTask");
        saveData();
    }
    else if (e.target.innerHTML === 'remove') {
        e.target.parentElement.remove();
        saveData();
    }
},false);

function saveData(){
    localStorage.setItem("data",listContainer.innerHTML);
}

function getData(){
    listContainer.innerHTML = localStorage.getItem("data");
}
getData();


