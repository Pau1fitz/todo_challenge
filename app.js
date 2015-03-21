var toDoList = angular.module('toDoList',[]);

toDoList.controller('toDoListController', function($scope){
  $scope.toDos = [];
  $scope.tasks = 0

  $scope.submit = function(){
    if($scope.text){
    $scope.toDos.push({text: this.text, done:false});
    $scope.text = '';
    $scope.tasks += 1
    };
  };

  $scope.clearOne = function(){
    $scope.toDos.done = true
    $scope.tasks -= 1;
    console.log($scope.toDos)


  };

  $scope.clear = function(){
    $scope.toDos = [];
  };


});