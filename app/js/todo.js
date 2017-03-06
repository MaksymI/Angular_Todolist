var app = angular.module('todoApp', []);
app.controller('todoListCtrl', function () {
    var todoListCtrl = this;
    todoListCtrl.todos = [
        {
            text: 'learn AngularJS',
            done: true
        },
        {
            text: 'build first AngularJS app',
            done: true
        },
        {
            text: 'start working as junior AngularJS dev',
            done: false
        }];
    todoListCtrl.addTodo = function () {
        var toPush = {
            text: todoListCtrl.todoText,
            done: false
        };
        if (todoListCtrl.todoText) {
            todoListCtrl.todos.push(toPush);
            todoListCtrl.todoText = '';
        } else {
            console.log('input empty');
        }
    };
    todoListCtrl.remaining = function () {
        var count = 0;
        angular.forEach(todoListCtrl.todos, function (todo) {
            count += todo.done ? 0 : 1;
        });
        return count;
    };
    todoListCtrl.archive = function () {
        var oldTodos = todoListCtrl.todos;
        todoListCtrl.todos = [];
        angular.forEach(oldTodos, function (todo) {
            if (!todo.done) {
                todoListCtrl.todos.push(todo);
            }
        });
    };
});