const modal = document.querySelector("#modal");
const modalContent = document.querySelector("#modal-content");
const form = document.querySelector("#modal form");

const hideModal = () => modal.classList.add("hidden");

// set current todo to form
const setFormTodo = (todo) => {
  const query = name => form.querySelector(`*[name=${name}]`)
  const toFixTwo = number => number.toLocaleString('en-US', {
    minimumIntegerDigits: 2,
    useGrouping: false
  })
  
  const props = ['title', 'description', 'level']
  for (const prop of props) {
    query(prop).value = todo[prop]
  }

  const d = new Date(todo.due)
  query('due-date').value = `${d.getFullYear()}-${d.getMonth() + 1}-${d.getDate()}`
  query('due-time').value = `${toFixTwo(d.getHours())}:${toFixTwo(d.getMinutes())}`
}

// extractTodo from form
const extractTodo = () => {
  const data = new FormData(form);

  const due = `${data.get("due-date")} ${data.get("due-time")}`;

  return {
    title: data.get("title"),
    description: data.get("description"),
    due,
    isDone: false,
    level: data.get("level"),
  };
};

const showModal = ({ mode = "create", todo = null } = {}) => {
  modal.classList.remove("hidden");
  const createActions = document.querySelectorAll(".modal-create-todo-actions");
  const editActions = document.querySelectorAll(".modal-edit-todo-actions");

  if (mode === "create") {
    for (const action of createActions) {
      action.classList.remove("hidden");
    }
    for (const action of editActions) {
      action.classList.add("hidden");
    }
  } else if (mode === "edit") {
    modal.setAttribute("todo-id", todo.id);
    setFormTodo(todo)
    for (const action of createActions) {
      action.classList.add("hidden");
    }
    for (const action of editActions) {
      action.classList.remove("hidden");
    }
  }
};

modal.addEventListener("click", (evt) => {
  if (modalContent.contains(evt.target)) {
    // in content, not the mask
    // thus do nothing
    return;
  }

  // or close the modal
  hideModal();
});

export default {
  extractTodo,
  showModal,
  hideModal,
};
