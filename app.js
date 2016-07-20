/*
v2 Requirements
It should have a function to display todos
It should have a function to add new todos
It should have a function to edit todos
It should have a function to delete todos
*/

var todos = [' item 1', ' item 2', ' item 3'];

// display todos
function displayTodos() {
  console.log("My todos are" + todos + ".");
}
// add todos
function addTodos(todo) {
  todos.push(todo);
  displayTodos();
}
// change todos
function changeTodos(position, newValue) {
  todos[position] = newValue;
  displayTodos();
}
// delete todos
function deleteTodo(position) {
  todos.splice(position, 1);
  displayTodos();
}
