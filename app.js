/*
v8 Requirements
It should have working controls for addTodo
It should have working controls for changeTodo
It should have working controls for deleteTodo
It should have working controls for toggleCompleted
*/


// Global object to store todos
var todoList = {
  todos: [],

  displayTodos: function() {
    if (this.todos.length === 0) {
      console.log("This list is empty");
    } else {
      for (var i = 0; i < this.todos.length; i++) {
        if (this.todos[i].completed === true) {
          console.log('(X)', this.todos[i].todoText);
        } else {
          console.log('( )', this.todos[i].todoText);
        }
      }
    }
  },

  // methods to store objects in the todos array
  addTodo: function(todoText) {
    this.todos.push({
      todoText: todoText,
      completed: false,
    });
    this.displayTodos();
  },

  changeTodo: function(position, todoText) {
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
  },

  toggleAll: function() {
    var totalTodos = this.todos.length;
    var completedTodos = 0;

    // Get number of completedTodos
    for (var i = 0; i < totalTodos; i++) {
      if(this.todos[i].completed === true) {
        completedTodos++;
      }
    }
    //if everything is true, make everything false
    if(completedTodos === totalTodos) {
      for (var i = 0; i < totalTodos; i++) {
        this.todos[i].completed = false;
      }
    } else {
      for (var i = 0; i < totalTodos; i++) {
        this.todos[i].completed = true;
      }
    }

    this.displayTodos();
  },
};

// event handler to manage events
var handlers = {
  displayTodos: function() {
    todoList.displayTodos();
  },
  toggleAll: function() {
    todoList.toggleAll();
  },
  addTodo: function() {
    var addTodoTextInput = document.getElementById('addTodoTextInput');
    todoList.addTodo(addTodoTextInput.value);
    addTodoTextInput.value = "";
  },
  changeTodo: function() {
    // gets the value of the position input
    var changeTodoPositionInput = document.getElementById('changeTodoPositionInput');
    // gets the value of the text input
    var changeTodoText = document.getElementById('changeTodoText');
    // grabs the todolist object, calls changeTodo and passes in the number and text from the input
    todoList.changeTodo(changeTodoPositionInput.valueAsNumber, changeTodoText.value);
    // the following two lines just reset the value of the inputs
    changeTodoPositionInput.value = "";
    changeTodoText.value = "";
  },
  deleteTodo: function() {
    var deleteTodoPosition = document.getElementById('deleteTodoPosition');
    todoList.deleteTodo(deleteTodoPosition.valueAsNumber);
    deleteTodoPosition.value = "";
  },
  toggleCompleted: function() {
    var toggleCompletedPosition = document.getElementById('toggleCompletedPosition');
    todoList.toggleCompleted(toggleCompletedPosition.valueAsNumber);
    toggleCompletedPosition.value = '';
  },
};
