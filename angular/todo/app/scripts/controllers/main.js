'use strict';

/**
 * @ngdoc function
 * @name todoApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the todoApp
 */
angular.module('todoApp')
  .controller('MainCtrl', function ($scope) {
    this.extraStuff = 'Some Extra Stuff';

    $scope.todos = [];

    $scope.addTodo = function () {
        // Add a Todo
        $scope.todos.push($scope.todo);  // pushes 'todo' to array
        $scope.todo = '';  // clears text input
    };

    $scope.removeTodo = function(index) {
        // Remove a Todo
        $scope.todos.splice(index, 1);  // remove from array
    };

  });
