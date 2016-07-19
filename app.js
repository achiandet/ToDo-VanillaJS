/*
Requirements
It should have a place to store todos
It should have a way to display todos
It should have a way to add new todos
It should have a way to change a todo
It should have a way to delete a todo
*/

var todos = [' item 1', ' item 2', ' item 3'];
    // adds item to the todo array
    todos.push(' item 4', ' item 5', 'item deleted');
    // allows you to edit the array
    todos[1] = " item 2 changed"
    // allows you to delete an item from the array
    todos.splice(5, 1);

console.log("My todos are" + todos + ".");
