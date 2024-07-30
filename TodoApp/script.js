const Tasks = []

let editIndex = 0

function addTask() {
    let taskTitle = document.getElementById("taskTitle").value
    if (taskTitle ===''){
        alert("Task can not be empty.")
        return
    }
    let newTask = {"title":taskTitle}
    Tasks.push(newTask)
    render()
}


function render() {
    document.getElementById("todoList").innerHTML = ''
    Tasks.forEach((task,index)=>{
            const color = getRandomColor()
            const li = document.createElement("li")
            li.classList = "todo-item"
            li.style.backgroundColor =color
            li.innerHTML = `
            <div class="todo-title">${task.title} </div>
                <div class="todo-buttons">
                    <button class="edit-btn">Edit</button>
                    <button class="delete-btn">Delete</button>
            </div>
            `
            li.querySelector(".edit-btn").addEventListener("click",()=>{
                editTask(index)
            })

            li.querySelector(".delete-btn").addEventListener("click",()=>{
                deleteTask(index)
            })
            document.getElementById("todoList").appendChild(li)

    })
}



function editTask(index) {
    editIndex = index
    document.getElementById("editTaskTitle").value = Tasks[index].title

    document.getElementById("editModal").style.display="block"
}

function deleteTask(index) {
    Tasks.splice(index,1)
    render()
}
function saveEdit() {
    let inpValue = document.getElementById("editTaskTitle").value
    Tasks[editIndex].title = inpValue
    closeModal()
}


function getRandomColor() {
    const colors = ['#3CB371', '#FFD700', '#1E90FF', '#9370DB', '#E6E6FA', '#FF4500', '#FF69B4'];
    return colors[Math.floor(Math.random() * colors.length)];
}



render()

function closeModal() {
    document.getElementById("editModal").style.display="none"

}
// this will call the add task method after clicking on the addtask button
document.getElementById("addTaskBtn").addEventListener("click",()=>{
    addTask()
})
console.log(Tasks);

document.getElementById("saveEditBtn").addEventListener("click",()=>{
    saveEdit()
    render()
    // console.log(Tasks);
})

document.getElementById("close").addEventListener("click",()=>{
    closeModal()
    // console.log(Tasks);
})