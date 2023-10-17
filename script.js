const input = document.getElementById('todo-input')
const add = document.getElementById('add-btn')
const list = document.getElementById('todo-list')

const todoContainer = document.getElementById('todo-container')
const completedContainer = document.getElementById('completed-container')


const amountCompleted = document.getElementById('amount')

amountCompleted.textContent = "No Tasks Assigned"

const checkAmount = () => {
    let allCount = 0
    let doneCount = 0
    const allElements = document.querySelectorAll('.task')
    const doneElements = document.querySelectorAll('.done')
    allElements.forEach(() => allCount += 1)
    doneElements.forEach(() => doneCount += 1)
    return `${doneCount} / ${allCount}`
}
const deleteElement = (parent) => {
    parent.remove()
    amountCompleted.textContent = checkAmount()
}
const deleteCompletedElement = (parent) => {
    parent.remove()
    amountCompleted.textContent = checkAmount()
}

const checkElement = (parent) => {


    const completedTask = parent.cloneNode(true)
    completedTask.classList.add('done')
    completedTask.classList.add('completed-task')

    const checkMark = completedTask.querySelectorAll('.check-btn')
    const deleteBtn = completedTask.querySelectorAll('.del-btn')

    deleteBtn[0].addEventListener('click', () => {
        deleteElement(completedTask)
    })
    checkMark[0].remove()
    completedContainer.appendChild(completedTask)
    list.removeChild(parent)

    amountCompleted.textContent = checkAmount()
}
const addTask = () => {
    let inputValue = input.value
    if (inputValue !== "") {


        const liParent = document.createElement('li')
        liParent.classList.add('liParent')
        liParent.classList.add('task')

        const newLi = document.createElement('p')
        newLi.classList.add('lElement')

        const deleteBtn = document.createElement('button')
        deleteBtn.classList.add('del-btn')
        deleteBtn.textContent = "X"

        const checkBtn = document.createElement('button')
        checkBtn.classList.add('check-btn')
        checkBtn.textContent = "✓️"

        newLi.textContent = inputValue

        liParent.appendChild(newLi)
        liParent.appendChild(checkBtn)
        liParent.appendChild(deleteBtn)

        list.appendChild(liParent)

        amountCompleted.textContent = checkAmount()

        deleteBtn.addEventListener('click', () => {
            deleteCompletedElement(liParent)
        })
        checkBtn.addEventListener('click', () => {
            checkElement(liParent)
        })
    }
    input.value = ""
}

const toggle = () => {
    toggleBall.classList.toggle('toggle-on')
    indicatorText.classList.toggle('completed')
    todoContainer.classList.toggle('todo-tasks-off')
    completedContainer.classList.toggle('completed-tasks-on')
}

add.addEventListener('click', addTask)

const toggleBox = document.getElementById('toggle-box')
const toggleBall = document.getElementById('toggle-ball')
const indicatorText = document.getElementById('indicator')


toggleBox.addEventListener('click', toggle)

// const app = Vue.createApp({
//     data() {
//         return {}
//     }
// })
//
// app.mount('#father')

