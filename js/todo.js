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

/* update list */
function renderList(listElement, todos) {
  // remove existing list
  while (listElement.childElementCount) {
    listElement.removeChild(listElement.firstChild)
  }

  for (const todo of todos) {
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

    listElement.appendChild(item)
  }
}

function render() {
  const emergencyList = document.querySelector('#emergency-todo-list .todo-list')
  const normalList = document.querySelector('#normal-todo-list .todo-list')
  const guguList = document.querySelector('#gugu-todo-list .todo-list')

  renderList(emergencyList, todos.filter(t => t.level === 'emergency'))
  renderList(normalList, todos.filter(t => t.level === 'normal'))
  renderList(guguList, todos.filter(t => t.level === 'gugu'))
}


export default {
    todos,
    render
}