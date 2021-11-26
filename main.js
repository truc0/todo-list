import './style.scss'
import Todo from './js/todo.js'
import Modal from './js/modal.js'

const { todos, render } = Todo
const { showModal, hideModal } = Modal

render()

const showModalBtn = document.querySelector('#create-todo-btn')
showModalBtn.addEventListener('click', evt => {
  showModal()  
})

/* Modals */

const createBtns = document.querySelectorAll('#modal .create')
for (const btn of createBtns) {
  btn.addEventListener('click', evt => {
    const form = document.querySelector('#modal form')
    const data = new FormData(form)

    if (data.get('title') === '') {
      const formErrors = document.querySelector('#modal .form-errors')
      formErrors.classList.remove('hidden')
      return
    }

    const due = `${data.get('due-date')} ${data.get('due-time')}`

    const todo = {
      title: data.get('title'),
      description: data.get('description'),
      due,
      isDone: false,
      level: data.get('level')
    }

    todos.push(todo)
    render()

    hideModal()
  })
}

const cancelBtns = document.querySelectorAll('#modal .cancel')
for (const btn of cancelBtns) {
  btn.addEventListener('click', evt => {
    hideModal()
  })
}