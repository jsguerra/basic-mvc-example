import Model from './model.js'
import View from './view.js'

class Controller {
  constructor(model, view) {
    this.model = model
    this.view = view

    this.model.bindTodoListChanged(this.onTodoListChanged)
    this.view.bindAddTodo(this.handleAddTodo)
    this.view.bindDeleteTodo(this.handleDeleteTodo)
    this.view.bindToggleTodo(this.handleToggleTodo)
    // this.view.bindEditTodo(this.handleEditTodo) - We'll do this one last

    // Display initial todos
    this.onTodoListChanged(this.model.todos)
  }

  onTodoListChanged = (todos) => {
    this.view.displayTodos(todos)
  }

  handleAddTodo = (todoText) => {
    this.model.addTodo(todoText)
  }
  
  handleEditTodo = (id, todoText) => {
    this.model.editTodo(id, todoText)
  }
  
  handleDeleteTodo = (id) => {
    this.model.deleteTodo(id)
  }
  
  handleToggleTodo = (id) => {
    this.model.toggleTodo(id)
  }
}

const app = new Controller(new Model(), new View())