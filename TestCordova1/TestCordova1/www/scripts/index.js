// For an introduction to the Blank template, see the following documentation:
// http://go.microsoft.com/fwlink/?LinkID=397704
// To debug code on page load in Ripple or on Android devices/emulators: launch your app, set breakpoints, 
// and then run "window.location.reload()" in the JavaScript Console.
(function () {
    "use strict";

    document.addEventListener( 'deviceready', onDeviceReady.bind( this ), false );

    function onDeviceReady() {
        // Handle the Cordova pause and resume events
        document.addEventListener( 'pause', onPause.bind( this ), false );
        document.addEventListener( 'resume', onResume.bind( this ), false );
        
        // TODO: Cordova has been loaded. Perform any initialization that requires Cordova here.
    };

    function onPause() {
        // TODO: This application has been suspended. Save application state here.
    };

    function onResume() {
        // TODO: This application has been reactivated. Restore application state here.
    };
} )();



// TO DO List
angular.module('todoApp', [])
    .controller('TodoListController', function () {
        var todoList = this;
        todoList.curtime = new Date();
        // Initialize the todo list
        todoList.todos = [
            {
                text: 'learn angular',
                done: true,
                time: todoList.curtime
            },
            {
                text: 'build and angular app',
                done: true,
                time: todoList.curtime
            }
        ];

        // define addTodo event.
        todoList.addTodo = function () {
            var addTime = new Date();
            //todoList.curtime = addTime;
            todoList.todos.push(
                {
                    text: todoList.todoText,
                    done: false,
                    time: addTime
                });
            todoList.todoText = '';
        };

        // define remaining event
        todoList.remaining = function () {
            var count = 0;
            angular.forEach(todoList.todos, function (todo) {
                count += todo.done ? 0 : 1;
            });
            return count;
        };

        // define archive event.
        todoList.archive = function () {
            var oldTodos = todoList.todos;
            todoList.todos = [];
            angular.forEach(oldTodos, function (todo) {
                if (!todo.done) {
                    todoList.todos.push(todo);
                }
            });
        };

    })