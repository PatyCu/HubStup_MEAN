'use strict';

/**
 * @ngdoc function
 * @name clientApp.controller:StartupDeleteCtrl
 * @description
 * # StartupDeleteCtrl
 * Controller of the clientApp
 */
angular.module('clientApp')
  .controller('StartupDeleteCtrl', function (
  $routeParams,
  Startups,
  $location
) {
  this.startup = Startups.one($routeParams.id).get().$object;
  this.deleteStartup = function() {
    this.startup.remove().then(function() {
      $location.path('/startups');
    });
  };
  this.back = function() {
    $location.path('/startup/' + $routeParams.id);
  };
});