'use strict';

/**
 * @ngdoc overview
 * @name lunchHubApp
 * @description
 * # lunchHubApp
 *
 * Main module of the application.
 */
angular
  .module('lunchHubApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ui.router',
    'ngSanitize',
    'ngTouch',
    'xeditable'
  ])
  .config(function ($stateProvider, $urlRouterProvider) {

    $stateProvider
    .state('home', {
      url: '/',
      templateUrl: 'views/main.html',
      controller: 'MainCtrl'
    })
    .state('groups', {
      url: '/groups',
      templateUrl: 'views/groups.html',
      controller: 'GroupCtrl'
    })
    .state('about', {
      url: '/about',
      templateUrl: 'views/about.html',
      controller: 'AboutCtrl'
    });

    $urlRouterProvider.otherwise('home');
  })
  .run(function(editableOptions) {
    editableOptions.theme = 'bs3'; // bootstrap3 theme. Can be also 'bs2', 'default'
  });
