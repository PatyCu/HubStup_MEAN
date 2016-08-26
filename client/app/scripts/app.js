'use strict';

/**
 * @ngdoc overview
 * @name clientApp
 * @description
 * # clientApp
 *
 * Main module of the application.
 */
angular
  .module('clientApp', [
    'ngRoute',
    'restangular'
  ])
  .config(function ($routeProvider, RestangularProvider) {
    RestangularProvider.setBaseUrl('http://localhost:3000');

    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
      })
      .when('/startups', {
        templateUrl: 'views/startups.html',
        controller: 'StartupsCtrl',
      })
      .when('/create/startup', {
        templateUrl: 'views/startup-add.html',
        controller: 'StartupAddCtrl',
      })
      .when('/startup/:id', {
        templateUrl: 'views/startup-view.html',
        controller: 'StartupViewCtrl',
      })
      .when('/startup/:id/delete', {
        templateUrl: 'views/startup-delete.html',
        controller: 'StartupDeleteCtrl',
      })
      .when('/startup/:id/edit', {
        templateUrl: 'views/startup-edit.html',
        controller: 'StartupEditCtrl',
      })
      .otherwise({
        redirectTo: '/'
      });
  })
  .factory('StartupRestangular', function(Restangular) {
    return Restangular.withConfig(function(RestangularConfigurer) {
      RestangularConfigurer.setRestangularFields({
        id: '_id'
      });
    });
  })
  .factory('Startups', function(StartupRestangular) {
    return StartupRestangular.service('startups');
  });

 $(function() {
  var images = ['glenfinnan.jpg', 'otters.jpg', 'quiraing.jpg', 'quiraing2.jpg',
    'skye.jpg', 'skye2.jpg', 'stoer.jpg', 'storr.jpg'];
  $('#background').css({'background-image': 'url(images/' + images[Math.floor(Math.random() * images.length)] + ')'});
 });
