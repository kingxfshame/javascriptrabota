//Define ul elements

const form = document.querySelector("#task-form");
const taskinput = document.querySelector("#task");
const tasklist = document.querySelector(".collection");
const clearbutton = document.querySelector(".clear-tasks");
const filter = document.querySelector("#filter");


loadEventListener();

function loadEventListener(){

    form.addEventListener('submit',addTask);

    tasklist.addEventListener('click', removeTask)
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

    storeTaskInLocalStorage(taskinput.value);


    e.preventDefault();
}

function storeTaskInLocalStorage(task){
    let tasks;

    if(localStorage.getItem('tasks') === null){
        tasks = [];
    }
    else{
        tasks = JSON.parse(localStorage.getItem('tasks'));
    }
    tasks.push(task);
    localStorage.setItem('tasks',JSON.stringify(tasks));
    for(var i in tasks)
    {
        console.log(tasks[i]);
    }
}

function removeTask(e){
    if(e.target.parentElement.classList.contains('delete-item')){
        console.log(e);
        console.log(e.target);
        if(confirm("Are you sure you want to delete the item?")){
            e.target.parentElement.parentElement.remove();
        }
    }
    
}