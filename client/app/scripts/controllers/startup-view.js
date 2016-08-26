'use strict';

/**
 * @ngdoc function
 * @name clientApp.controller:StartupViewCtrl
 * @description
 * # StartupViewCtrl
 * Controller of the clientApp
 */
angular.module('clientApp')
  .controller('StartupViewCtrl', function (
  $routeParams,
  Startups
) {
  this.viewStartup = true;
  this.startup = Startups.one($routeParams.id).get().$object;
});
