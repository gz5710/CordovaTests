// TO DO List
angular.module('todoApp', [])
    .controller('TodoListController', function () {
        var todoList = this;
        var service = new TodoListService();
        todoList.curtime = new Date();
        // Initialize the todo list
        todoList.allTodos = service.Get();
        //todoList.todos = todoList.allTodos;

        // define addTodo event.
        todoList.addTodo = function () {
            // insert into list
            var addTime = new Date();
            var newTodo = new Todo(todoList.todoText, false, addTime);
            todoList.todos.push(newTodo);
            todoList.allTodos.push(newTodo);
            todoList.todoText = '';     // Clear textbox.
            // save the addition.
            service.Save(todoList.allTodos);
            console.log("Added a new task.");
        };

        // define remaining event
        todoList.remaining = function () {
            var count = 0;
            angular.forEach(todoList.todos, function (todo) {
                count += todo.done ? 0 : 1;
            });
            return count;
        };

        // define showUndo event.
        todoList.showUndo = function () {
            todoList.todos = [];
            angular.forEach(todoList.allTodos, function (todo) {
                if (todo.state === StatePool.UNDO) {
                    todoList.todos.push(todo);
                }
            });
        };

        // define showDone event.
        todoList.showDone = function () {
            todoList.todos = [];
            angular.forEach(todoList.allTodos, function (todo) {
                if (todo.state === StatePool.DONE) {
                    todoList.todos.push(todo);
                }
            });
        };

        // define showAll event.
        todoList.showAll = function () {
            todoList.todos = todoList.allTodos;
        };

        // define remove event.
        todoList.remove = function () {
            if (confirm("Do you really want to remove all completed tasks ?")) {
                var old = [];
                angular.forEach(todoList.allTodos, function (todo) {
                    if (todo.state === StatePool.UNDO) {
                        old.push(todo);
                    }
                });
                todoList.allTodos = old;
                service.Save(todoList.allTodos);
                // refresh list.
                todoList.showUndo();
                console.log("Removed All Completed Tasks.");
            }
        };

        // define checkDone event.
        todoList.checkDone = function ($event, todo) {
            var checkbox = $event.target;
            if (checkbox.checked) {
                todo.state = StatePool.DONE;
            } else {
                todo.state = StatePool.UNDO;
            }
            console.log(todo);
            console.log(todoList.todos);
            console.log(todoList.allTodos);
            // save the change.
            service.Save(todoList.allTodos);
            console.log("Saved the change.");
        };
        
        todoList.showUndo();
        console.log("Well Initialized.");
    })