/*
v10 Requirements
There should be a way to create delete buttons
There should be a delete button for each todo
Each li should have an ide that has the todo position
Clicking delete should update todoList.todos and the DOM
*/


// Global object to store todos
var todoList = {
  todos: [],

  // methods to store objects in the todos array
  addTodo: function(todoText) {
    this.todos.push({
      todoText: todoText,
      completed: false,
    });
  },

  changeTodo: function(position, todoText) {
    this.todos[position].todoText = todoText;
  },

  deleteTodo: function(position) {
    this.todos.splice(position, 1);
  },

  toggleCompleted: function(position) {
    var todo = this.todos[position];
    todo.completed = !todo.completed;
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
  },
};

// event handler to manage events
var handlers = {
  toggleAll: function() {
    todoList.toggleAll();
    view.displayTodos();
  },
  addTodo: function() {
    var addTodoTextInput = document.getElementById('addTodoTextInput');
    todoList.addTodo(addTodoTextInput.value);
    addTodoTextInput.value = "";
    view.displayTodos();
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
    view.displayTodos();
  },
  deleteTodo: function(position) {
    todoList.deleteTodo(position);
    view.displayTodos();
  },
  toggleCompleted: function() {
    var toggleCompletedPosition = document.getElementById('toggleCompletedPosition');
    todoList.toggleCompleted(toggleCompletedPosition.valueAsNumber);
    toggleCompletedPosition.value = '';
    view.displayTodos();
  },
};

// insert li's into the DOM
var view = {
  displayTodos: function() {
    var todosUl = document.querySelector('ul');
    todosUl.innerHTML = "";
    for (var i = 0; i < todoList.todos.length; i++) {
      var todoLi = document.createElement('li');
      var todo = todoList.todos[i];
      var todoTextWithCompletion = '';

      if (todo.completed === true) {
        todoTextWithCompletion = '(x) ' + todo.todoText;
      } else {
        todoTextWithCompletion = '( ) ' + todo.todoText;
      }

      todoLi.id = i;
      todoLi.textContent = todoTextWithCompletion;
      todoLi.appendChild(this.createDeleteButton());
      todosUl.appendChild(todoLi);
    }
  },
  createDeleteButton: function() {
    var deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.className = 'deleteButton';
    return deleteButton;
  },
  setupEventListeners: function() {
    var todosUl = document.querySelector('ul');

    todosUl.addEventListener('click', function(event) {
      // get the element that was clicked on
      var elementClicked = event.target;

      // check if elementClicked is a delete button
      if (elementClicked.className === 'deleteButton') {
        handlers.deleteTodo(parseInt(elementClicked.parentNode.id));
      }
    });
  },
};

view.setupEventListeners();
