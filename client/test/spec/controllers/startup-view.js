'use strict';

describe('Controller: StartupViewCtrl', function () {

  // load the controller's module
  beforeEach(module('clientApp'));

  var StartupViewCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    StartupViewCtrl = $controller('StartupViewCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(StartupViewCtrl.awesomeThings.length).toBe(3);
  });
});
