import Todo from './todo.js'

const { todos, render } = Todo

const modal = document.querySelector('#modal')
const modalContent = document.querySelector('#modal-content')

const showModal = () => modal.classList.remove('hidden')
const hideModal = () => modal.classList.add('hidden')

modal.addEventListener('click', evt => {
    if (modalContent.contains(evt.target)) {
        // in content, not the mask
        // thus do nothing
        return
    }

    // or close the modal
    hideModal()
})

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

export default {
    showModal,
    hideModal
}