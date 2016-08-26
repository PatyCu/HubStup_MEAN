'use strict';

/**
 * @ngdoc function
 * @name clientApp.controller:StartupsCtrl
 * @description
 * # StartupsCtrl
 * Controller of the clientApp
 */
angular.module('clientApp')
  .controller('StartupsCtrl', function (Startups) {
  /*
  .controller('StartupsCtrl', function () {

    this.startups = [
    	{
    		name: 'Scytl',
    		url: 'ttp://youtube.com/embed/1g3_CFmnU7k'
    	},
    	{
    		name: 'Typeform',
    		url: 'http://youtube.com/embed/96v4XraJEPI'
    	},
    	{
          	name: 'Strands',
          	url: 'http://youtube.com/embed/5UfA_aKBGMc'
        }
    ];
    */
    this.startups = Startups.getList().$object;
  });
