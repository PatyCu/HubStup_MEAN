'use strict';

describe('Controller: StartupDeleteCtrl', function () {

  // load the controller's module
  beforeEach(module('clientApp'));

  var StartupDeleteCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    StartupDeleteCtrl = $controller('StartupDeleteCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(StartupDeleteCtrl.awesomeThings.length).toBe(3);
  });
});
