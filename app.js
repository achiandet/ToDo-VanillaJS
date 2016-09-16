/*
v4 Requirements
displayTodos should show todoText
displayTodos should tell you if todos is empty
displayTodos should show completed
*/

var todoList = {
  todos: [],

  displayTodos: function() {
    console.log('My todos: ');
    if (this.todos.length === 0) {
      console.log("Your todo list is empty");
    } else {
      for (var i = 0; i < this.todos.length; i++) {
        if (this.todos[i].completed === true) {
          console.log("( X ) ", this.todos[i].todoText);
        } else {
          console.log("(  ) ", this.todos[i].todoText);
        }
      }
    }
  },

  addTodo: function(todoText) {
    this.todos.push({
      todoText: todoText,
      completed: false,
    });
    this.displayTodos();
  },

  changeTodo: function(position, todoText) {
    // this.todos[position] = newValue;
    this.todos[position].todoText = todoText;
    this.displayTodos();
  },

  deleteTodo: function(position) {
    this.todos.splice(position, 1);
    this.displayTodos();
  },

  toggleCompleted: function(position) {
    var todo = this.todos[position];
    todo.completed = !todo.completed;
    this.displayTodos();
  }
};








/*

Anki

What is the first thing in a for loop?
Initialization

What is the second thing in a for loop?
Condition

What is the last element of a for loop?
Final Expression


*/
