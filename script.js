const taskInput = document.getElementById('task-input')
const addTaskBtn = document.getElementById('add-task-btn')
const taskList = document.getElementById('task-list')

let tasks = JSON.parse(localStorage.getItem('tasks')) || []

document.addEventListener('DOMContentLoaded', displayTasks)


function displayTasks(){
    taskList.innerHTML = ''
    tasks.forEach((task, index) => createTaskElement(task, index))
}

function createTaskElement(task, index) {
    const li = document.createElement('li')
    li.className = 'flex justify-between items-center bg-white p-4 rounded-md shadow-md'

    const taskText = document.createElement('span')
    taskText.textContent = task.text
    taskText.className = task.completed ? 'line-through': ''

    const buttonContainer = document.createElement('div')
    buttonContainer.className = 'flex space-x-2'

    const editBtn = document.createElement('button')
    editBtn.textContent = 'Editar'
    editBtn.className = 'bg-yellow-500 text-white px-3 py-1 rounded-md hover:bg-yellow-600 transition duration-200'
    editBtn.onclick = () => editTask(index)

    const deleteBtn = document.createElement('button')
    deleteBtn.textContent = 'Excluir'
    deleteBtn.className = 'bg-red-500 text-white px-3 py-1 rounded-md hover:bg-red-600 transition duration-200'
    deleteBtn.onclick = () => deleteTask(index)

    const completeBtn = document.createElement('button')
    completeBtn.textContent = task.completed ? 'Desfazer' : 'Concluir'
    completeBtn.className = 'bg-green-500 text-white px-3 py-1 rounded-md hover:bg-green-600 transition duration-200'
    completeBtn.onclick = () => toggleCompleteTask(index)

    buttonContainer.appendChild(editBtn)
    buttonContainer.appendChild(completeBtn)
    buttonContainer.appendChild(deleteBtn)
    

    li.appendChild(taskText)
    li.appendChild(buttonContainer)
    taskList.appendChild(li)
}


//Adicionando nova tarefa pelo click do botão Adicionar
addTaskBtn.addEventListener('click', () => {
    const taskText = taskInput.value.trim()
    if (taskText === ''){
        return
    }

    tasks.push({ text: taskText, completed: false})
    updateLocalStorage()
    createTaskElement({ text: taskText, completed: false}, tasks.length -1)
    taskInput.value = ''
})

//Função Editar
function editTask(index){
    const newText = prompt('Edite a tarefa: ', tasks[index].text)
    if (newText !== null){
        tasks[index].text = newText
        updateLocalStorage()
        displayTasks()
    }
}

//Função Excluir Tarefa
function deleteTask(index) {
    tasks.splice(index, 1)
    updateLocalStorage()
    displayTasks()
}

//Função de status da Tarefa (Concluída ou não concluída)
function toggleCompleteTask(index){
    tasks[index].completed = !tasks[index].completed //ao clicar no botão altera o completed de V p/ F ou vice-versa
    updateLocalStorage()
    displayTasks()
}

function updateLocalStorage(){
    localStorage.setItem('tasks', JSON.stringify(tasks))
}
