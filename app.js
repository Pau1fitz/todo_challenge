var toDoList = angular.module('toDoList',[]);

toDoList.controller('toDoListController', function($scope){
  $scope.toDos = [];
  $scope.tasks = 0;
  $scope.id = -1;

  $scope.submit = function(){
    if($scope.text){
    $scope.toDos.push({id: $scope.id += 1, text: this.text, done:false});
    $scope.text = '';
    $scope.tasks += 1
    };
  };

  $scope.clearOne = function(index){
    $scope.tasks -= 1;
    $scope.toDos[index].done = true
    console.log($scope.toDos)
  };

  $scope.clear = function(){
    $scope.toDos = [];
  };


});