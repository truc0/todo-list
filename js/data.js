const KEY = 'todos'

const todos = [
  {
    id: 0,
    title: 'Math Homework',
    description: 'I dont know calculus',
    due: '',
    level: 'emergency',
    isDone: false
  },
  {
    id: 1,
    title: 'English Homework',
    description: 'I dont speak English',
    due: '',
    level: 'emergency',
    isDone: false
  },
  {
    id: 2,
    title: 'PE Homework',
    description: 'I stay at 127.0.0.1',
    due: '',
    level: 'emergency',
    isDone: false
  },
]

const save = () => {
  localStorage.setItem(KEY, JSON.stringify(todos))
}

const load = () => {
  let loadedStr = localStorage.getItem(KEY)
  if (loadedStr === null) { return }

  let loaded = JSON.parse(loadedStr)

  while (todos.length) {
    todos.pop()
  }

  for (const todo of loaded) {
    todos.push(todo) 
  }
}

export default {
  todos,
  save,
  load
}