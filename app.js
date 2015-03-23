var toDoList = angular.module('toDoList',[]);

toDoList.controller('toDoListController', function($scope){
  $scope.view = 0
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
    if($scope.tasks > 0){
    $scope.tasks -= 1;
    $scope.toDos[index].done = true
    }else{
      return false
    }
  };

  $scope.clear = function(){
    $scope.toDos = [];
    $scope.tasks = 0;
  };

  $scope.changeView = function(number){
    $scope.view = number
  }
});