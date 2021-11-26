import './style.scss'
import Modal from './modal.js'

const { showModal, hideModal } = Modal

const todos = [
  {
    title: 'Math Homework',
    description: 'I dont know calculus',
    due: '',
    level: 'emergency',
    isDone: false
  },
  {
    title: 'English Homework',
    description: 'I dont speak English',
    due: '',
    level: 'emergency',
    isDone: false
  },
  {
    title: 'PE Homework',
    description: 'I stay at 127.0.0.1',
    due: '',
    level: 'emergency',
    isDone: false
  },
]

const emergencyList = document.querySelector('#emergency-todo-list .todo-list')


/* update list */

// remove existing list
while (emergencyList.childElementCount) {
  emergencyList.removeChild(emergencyList.firstChild)
}

for (const todo of todos.filter(t => t.level === 'emergency')) {
  /*
    <li class="todo-list-item">
      <h6 class="todo-list-item-title">Physic Homework</h6>
      <p class="todo-list-item-description">
        I have too much homework todo.
      </p>
    </li>
  */
  const item = document.createElement('li')
  item.classList.add('todo-list-item')

  const itemTitle = document.createElement('h6')
  itemTitle.classList.add('todo-list-item-title')
  itemTitle.innerText = todo.title

  const itemDescription = document.createElement('p')
  itemDescription.classList.add('todo-list-item-description')
  itemDescription.innerText = todo.description

  item.appendChild(itemTitle)
  item.appendChild(itemDescription)

  emergencyList.appendChild(item)
}


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
    hideModal()
  })
}

const cancelBtns = document.querySelectorAll('#modal .cancel')
for (const btn of cancelBtns) {
  btn.addEventListener('click', evt => {
    hideModal()
  })
}