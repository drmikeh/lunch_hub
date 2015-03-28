'use strict';

angular.module('lunchHubApp', ['ngAnimate',
                               'ngCookies',
                               'ngTouch',
                               'ngSanitize',
                               'xeditable',
                               'ngMessages',
                               'ui.router',
                               'ui.bootstrap'
                              ])
.config(function ($httpProvider, $stateProvider, $urlRouterProvider) {

  $httpProvider.defaults.withCredentials = true;

  $stateProvider
  .state('home', {
    url: '/',
    templateUrl: 'app/main/main.html',
    controller: 'MainCtrl'
  })
  .state('groups', {
    url: '/groups',
    templateUrl: 'app/group/groups.html',
    controller: 'GroupCtrl',
    onEnter: function($state, AuthService) {
      if (!AuthService.isAuthenticated()) {
        $state.go('home');
      }
    }
  })
  .state('login', {
    url: '/login',
    templateUrl: 'app/auth/login.html',
    controller: 'AuthCtrl'
  })
  .state('register', {
    url: '/register',
    templateUrl: 'app/auth/register.html',
    controller: 'AuthCtrl'
  });

  $urlRouterProvider.otherwise('/');
})
.run(function(editableOptions) {
  editableOptions.theme = 'bs3'; // bootstrap3 theme. Can be also 'bs2', 'default'
});
