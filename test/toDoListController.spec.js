describe('toDoList', function() {
  beforeEach(module('toDoList'));

  var scope, ctrl;

  beforeEach(inject(function($rootScope, $controller) {
    scope = $rootScope.$new();
    ctrl = $controller('toDoListController', {
        $scope: scope
    });
  }));

  it('initialises with an empty list', function() {
    expect(scope.toDos.length).toEqual(0);
  });

  it('can add items to the list', function(){
    scope.text = "Go to work";
    scope.submit();
    expect(scope.toDos.length).toEqual(1);
  });

  it('can mark an item as complete', function(){
    scope.text = "Go to work";
    scope.submit();
    scope.toDos[0].done = true
    expect(scope.toDos[0].done).toBe(true)
  });

  it('can remove an item from list if complete', function(){
    scope.text = "Go to work";
    scope.submit();
    scope.text = "Go home"
    scope.submit();
    scope.clearOne(0);
    expect(scope.tasks).toEqual(1)
  });

  it('can clear all items from the list', function(){
    scope.text = "Go to work";
    scope.submit();
    scope.text = "Go home";
    scope.submit();
    scope.clear();
    expect(scope.toDos.length).toEqual(0);
  });

  it('resets the tasks left to complete to zero after clearing', function(){
    scope.text = "Go to work";
    scope.submit();
    scope.text = "Go home";
    scope.submit();
    scope.clear();
    expect(scope.tasks).toEqual(0);
  })

});