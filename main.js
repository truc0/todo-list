import './style.scss'

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