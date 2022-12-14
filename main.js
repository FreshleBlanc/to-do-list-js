const tasks = document.getElementById('tasksList')

function addTask(task) {
    const newTasks = document.createElement('div')
    newTasks.classList.add('task-card')

    newTasks.innerHTML = `
        <h2>${task}</h2>
    `

    tasks.appendChild(newTasks)
}

const toDoEl = document.getElementById('toDoList')
toDoEl.addEventListener('submit', (event) => {
    event.preventDefault() // Prevents refresh

    let taskInput = document.getElementsByName('task')[0]

    addTask(taskInput.value)
})

const clearBtn = document.getElementById('clear')
clearBtn.addEventListener('click', (event) => {
    tasks.innerHTML = ''
})