const request = require('superagent')

const getTodos = () => request.get('http://localhost:3000/api/todos').then(res => {
	return res.body
})

const todoTitleHeader = document.createElement("P")
todoTitleHeader.setAttribute('class', 'todoTitleHeader')
const todoTitleHeaderText = document.createTextNode('List of Todos in descending order of ID: ')
todoTitleHeader.appendChild(todoTitleHeaderText)
document.body.appendChild(todoTitleHeader)

getTodos().then(todos => {
  const descendingById = todos.sort((a, b) => {return b.id - a.id})
descendingById.map(todo => {
  const todoTitle = document.createElement("P")
  todoTitle.setAttribute('class', 'todoTitle')
  const todoTitleText = document.createTextNode(todo.title)
  todoTitle.appendChild(todoTitleText)
  document.body.appendChild(todoTitle)
})
const totalNumberOfTodos = document.createElement("P")
totalNumberOfTodos.setAttribute('class', 'totalNumberOfTodos')
const totalNumberOfTodosText = document.createTextNode("Total number of todos in todo list: " + todos.length)
totalNumberOfTodos.appendChild(totalNumberOfTodosText)
document.body.appendChild(totalNumberOfTodos)
const completedTodos = todos.filter(todo => todo.completed)
const totalNumberOfCompletedTodos = document.createElement("P")
totalNumberOfCompletedTodos.setAttribute('class', 'totalNumberOfCompletedTodos')
const totalNumberOfCompletedTodosText = document.createTextNode("Total number of completed todos in todo list: " + completedTodos.length)
totalNumberOfCompletedTodos.appendChild(totalNumberOfCompletedTodosText)
document.body.appendChild(totalNumberOfCompletedTodos)
})

