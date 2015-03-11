'use strict';

angular.module('lunchHubApp')

.controller('NavCtrl', function ($scope, $rootScope, $state, AuthService) {

  console.log('NavCtrl is alive!');

  $scope.tabs = [
    { state: 'home',   label: 'Home',   active: true },
    { state: 'groups', label: 'Groups', active: false },
    { state: 'about',  label: 'About',  active: false }
  ];

  $scope.getTabClass = function(tab) {
    return tab.active ? 'active' : '';
  };

  $scope.$on('$stateChangeSuccess', function() {
    $scope.tabs.forEach(function(tab) {
      tab.active = $state.is(tab.state);
    });
  });

  $scope.auth = AuthService;

  console.log('signedIn(): ' + AuthService.isAuthenticated());

  AuthService.getCurrentUser().then(function(user) {
    $scope.user = user;
  });

  $rootScope.$on('auth:new-registration', function(event, user) {
    console.log('caught event auth:new-registration with user = ' + JSON.stringify(user));
    $scope.user = user;
  });

  $rootScope.$on('auth:login', function(event, user) {
    console.log('caught event auth:login with user = ' + JSON.stringify(user));
    $scope.user = user;
  });

  $rootScope.$on('auth:logout', function(/* event, user */) {
    $scope.user = {};
  });
});
