'use strict';

describe('Controller: StartupEditCtrl', function () {

  // load the controller's module
  beforeEach(module('clientApp'));

  var StartupEditCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    StartupEditCtrl = $controller('StartupEditCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(StartupEditCtrl.awesomeThings.length).toBe(3);
  });
});
