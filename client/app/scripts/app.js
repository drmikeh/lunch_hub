'use strict';

angular
.module('lunchHubApp', [
  'ngAnimate',
  'ngCookies',
  'ngResource',
  'ui.router',
  'ngSanitize',
  'ngTouch',
  'xeditable',
  'ngMessages'
])
.config(function ($httpProvider, $stateProvider, $urlRouterProvider) {

  $httpProvider.defaults.withCredentials = true;

  $stateProvider
  .state('home', {
    url: '/',
    templateUrl: 'views/main.html',
    controller: 'MainCtrl'
  })
  .state('groups', {
    url: '/groups',
    templateUrl: 'views/groups.html',
    controller: 'GroupCtrl',
    onEnter: ['$state', 'AuthService', function($state, AuthService) {
      if (!AuthService.isAuthenticated()) {
        $state.go('home');
      }
    }]
  })
  .state('about', {
    url: '/about',
    templateUrl: 'views/about.html',
    controller: 'AboutCtrl'
  })
  .state('login', {
    url: '/login',
    templateUrl: 'views/login.html',
    controller: 'AuthCtrl'
    // onEnter: ['$state', 'Auth', function($state, Auth) {
    //   Auth.currentUser().then(function () {
    //     $state.go('home');
    //   });
    // }]
  })
  .state('register', {
    url: '/register',
    templateUrl: 'views/register.html',
    controller: 'AuthCtrl'
    // onEnter: ['$state', 'Auth', function($state, Auth) {
    //   Auth.currentUser().then(function () {
    //     $state.go('home');
    //   });
    // }]
  });

  $urlRouterProvider.otherwise('home');
  })
  .run(function(editableOptions) {
    editableOptions.theme = 'bs3'; // bootstrap3 theme. Can be also 'bs2', 'default'
  });
