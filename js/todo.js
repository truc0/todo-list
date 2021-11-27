import Data from "./data.js";
import Modal from "./modal.js";

const { todos } = Data;
const { extractTodo, showModal, hideModal } = Modal;

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
  const item = document.createElement("li");
  item.classList.add("todo-list-item");

  const itemMain = document.createElement("div");
  itemMain.classList.add("todo-list-item--main");
  itemMain.addEventListener("click", (evt) => {
    showModal({ mode: "edit", todo: todo });
  });

  const itemTitle = document.createElement("h6");
  itemTitle.classList.add("todo-list-item-title");
  itemTitle.innerText = todo.title;

  const itemDescription = document.createElement("p");
  itemDescription.classList.add("todo-list-item-description")
  itemDescription.innerText = todo.description

  itemMain.appendChild(itemTitle)
  itemMain.appendChild(itemDescription)

  const itemAction = document.createElement("div")
  itemAction.classList.add("todo-list-item--action")

  const doneBtn = document.createElement("button")
  doneBtn.classList.add("todo-list-item--action-done")
  doneBtn.innerText = "🗸"
  doneBtn.addEventListener("click", (evt) => {
    todo.isDone = true
    render()
    Data.save()
  })

  itemAction.appendChild(doneBtn)

  item.appendChild(itemMain)
  item.appendChild(itemAction)

  return item
}

function renderList(listElement, todos) {
  // remove existing list
  while (listElement.childElementCount) {
    listElement.removeChild(listElement.firstChild);
  }

  for (const todo of todos) {
    listElement.appendChild(generateItem(todo));
  }
}

function render() {
  const emergencyList = document.querySelector(
    "#emergency-todo-list .todo-list"
  );
  const normalList = document.querySelector("#normal-todo-list .todo-list");
  const guguList = document.querySelector("#gugu-todo-list .todo-list");

  const _todos = todos.filter((t) => !t.isDone);

  renderList(
    emergencyList,
    _todos.filter((t) => t.level === "emergency")
  );
  renderList(
    normalList,
    _todos.filter((t) => t.level === "normal")
  );
  renderList(
    guguList,
    _todos.filter((t) => t.level === "gugu")
  );

  const cntEls = document.querySelectorAll('.todo-count')
  for (const element of cntEls) {
    element.innerText = todos.filter(t => !(t.isDone)).length
  }
}

function init() {
  const createBtns = document.querySelectorAll("#modal .create");
  for (const btn of createBtns) {
    btn.addEventListener("click", (evt) => {
      const todo = extractTodo()

      if (todo.title === '') {
        const formErrors = document.querySelector("#modal .form-errors")
        formErrors.classList.remove("hidden")
        return
      }

      todo.id = Date.now()

      todos.push(todo)
      Data.save()
      render()

      hideModal()
    })
  }

  const cancelBtns = document.querySelectorAll("#modal .cancel")
  for (const btn of cancelBtns) {
    btn.addEventListener("click", (evt) => {
      hideModal()
    })
  }

  const saveBtns = document.querySelectorAll("#modal .save")
  for (const btn of saveBtns) {
    btn.addEventListener("click", (evt) => {
      const id = modal.getAttribute("todo-id")
      const todo = todos.find((t) => t.id === parseInt(id))

      const modified = extractTodo()
      const props = ['title', 'description', 'due', 'isDone', 'level']

      for (const prop of props) {
        todo[prop] = modified[prop]
      }
      Data.save()

      render()
      hideModal()
    })
  }
}

export default {
  init,
  render,
}
