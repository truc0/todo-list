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
function generateItem(todo) {
    /*
      <li class="todo-list-item">
        <div class="todo-list-item--main">
          <h6 class="todo-list-item-title">Data Structure</h6>
          <p class="todo-list-item-description">
            Data structure is hard to code.
          </p>
        </div>
        <div class="todo-list-item--action">
          <button class="todo-list-item--action-done">√</button>
        </div>
      </li>
    */
    const item = document.createElement("li")
    item.classList.add("todo-list-item")

    const itemMain = document.createElement("div")
    itemMain.classList.add("todo-list-item--main")

    const itemTitle = document.createElement("h6")
    itemTitle.classList.add("todo-list-item-title")
    itemTitle.innerText = todo.title

    const itemDescription = document.createElement("p")
    itemDescription.classList.add("todo-list-item-description")
    itemDescription.innerText = todo.description

    itemMain.appendChild(itemTitle)
    itemMain.appendChild(itemDescription)

    const itemAction = document.createElement("div")
    itemAction.classList.add("todo-list-item--action")

    const doneBtn = document.createElement("button")
    doneBtn.classList.add("todo-list-item--action-done")
    doneBtn.innerText = '🗸'
    doneBtn.addEventListener('click', evt => {
      todo.isDone = true
      render()
    })

    itemAction.appendChild(doneBtn)

    item.appendChild(itemMain)
    item.appendChild(itemAction)

    return item
}

function renderList(listElement, todos) {
  // remove existing list
  while (listElement.childElementCount) {
    listElement.removeChild(listElement.firstChild)
  }

  for (const todo of todos) {
    listElement.appendChild(generateItem(todo))
  }
}

function render() {
  const emergencyList = document.querySelector('#emergency-todo-list .todo-list')
  const normalList = document.querySelector('#normal-todo-list .todo-list')
  const guguList = document.querySelector('#gugu-todo-list .todo-list')

  const _todos = todos.filter(t => !t.isDone)

  renderList(emergencyList, _todos.filter(t => t.level === 'emergency'))
  renderList(normalList, _todos.filter(t => t.level === 'normal'))
  renderList(guguList, _todos.filter(t => t.level === 'gugu'))
}


export default {
    todos,
    render
}