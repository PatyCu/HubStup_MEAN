'use strict';

describe('Controller: StartupsCtrl', function () {

  // load the controller's module
  beforeEach(module('clientApp'));

  var StartupsCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    StartupsCtrl = $controller('StartupsCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(StartupsCtrl.awesomeThings.length).toBe(3);
  });
});
