import './style.scss'
import Todo from './js/todo.js'
import Modal from './js/modal.js'

const { render } = Todo
const { showModal } = Modal

function init() {
  Todo.init()
  render()

  const showModalBtn = document.querySelector('#create-todo-btn')
  showModalBtn.addEventListener('click', evt => {
    showModal()  
  })
}

init()