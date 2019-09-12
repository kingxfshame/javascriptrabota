//Define ul elements

const form = document.querySelector("#task-form");
const taskinput = document.querySelector("#task");
const tasklist = document.querySelector(".collection");
const clearbutton = document.querySelector(".clear-tasks");
const filter = document.querySelector("#filter");


loadEventListener();

function loadEventListener(){
    form.addEventListener('submit',addTask);
}

function addTask(e){
    const li = document.createElement('li');
    li.className = 'collection-item';
    li.appendChild(document.createTextNode(taskinput.value));
    const deleteLink = document.createElement('a');
    deleteLink.className = 'delete-item secondary-content';
    deleteLink.innerHTML = '<i class = "fa fa-remove">';
    li.appendChild(deleteLink);
    tasklist.appendChild(li);
    e.preventDefault();
}