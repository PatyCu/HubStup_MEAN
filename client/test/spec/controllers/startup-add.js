'use strict';

describe('Controller: StartupAddCtrl', function () {

  // load the controller's module
  beforeEach(module('clientApp'));

  var StartupAddCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    StartupAddCtrl = $controller('StartupAddCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(StartupAddCtrl.awesomeThings.length).toBe(3);
  });
});
