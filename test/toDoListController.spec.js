describe('toDoList', function() {
  beforeEach(module('toDoList'));

  var scope, ctrl;

  beforeEach(inject(function($rootScope, $controller) {
    scope = $rootScope.$new();
    ctrl = $controller('toDoListController', {
        $scope: scope
    });
  }));

  it('initialises with an empty toDoList', function() {
    expect(scope.toDos.length).toEqual(0);
  });

  it('can add items to the list', function(){
    scope.text = "Go to work";
    scope.submit();
    expect(scope.toDos.length).toEqual(1);
  });

  it('can remove items from the list', function(){
    scope.text = "Go to work";
    scope.submit;
    scope.clear();
    expect(scope.toDos.length).toEqual(0);
  })


});