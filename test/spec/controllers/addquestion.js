'use strict';

describe('Controller: AddquestionCtrl', function () {

  // load the controller's module
  beforeEach(module('quizApp'));

  var AddquestionCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    AddquestionCtrl = $controller('AddquestionCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
