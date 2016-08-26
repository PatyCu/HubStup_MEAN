'use strict';

/**
 * @ngdoc function
 * @name clientApp.controller:StartupAddCtrl
 * @description
 * # StartupAddCtrl
 * Controller of the clientApp
 */
angular.module('clientApp')
  .controller('StartupAddCtrl', function (Startups, $location) {
  this.startup = {};
  this.saveStartup = function() {
    Startups.post(this.startup).then(function() {
      $location.path('/startups');
    });
  };
});
