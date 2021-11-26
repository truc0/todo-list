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