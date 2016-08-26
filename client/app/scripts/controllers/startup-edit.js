'use strict';

/**
 * @ngdoc function
 * @name clientApp.controller:StartupEditCtrl
 * @description
 * # StartupEditCtrl
 * Controller of the clientApp
 */
 angular.module('clientApp')
 .controller('StartupEditCtrl', function (
 	$scope,
 	$routeParams,
 	Startups,
 	$location
 	) {
 	this.editStartup = true;
 	this.startup = Startups.one($routeParams.id).get().$object;
 	$scope.startup = this.startup;
 	this.saveStartup = function() {
 		this.startupRest = Startups.one($routeParams.id).get().then(function(unedittedStartup){
 			unedittedStartup.name = $scope.startup.name;
 			unedittedStartup.url = $scope.startup.url;
 			unedittedStartup.save().then(function() {
 				$location.path('/startups');
 			});
 		});
 	};

 });

