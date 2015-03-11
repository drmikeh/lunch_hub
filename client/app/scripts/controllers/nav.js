'use strict';

angular.module('lunchHubApp')

.controller('NavCtrl', function ($scope, $state, AuthService) {

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

  AuthService.currentUser().then(function(user) {
    $scope.user = user;
  });

  // $scope.$on('auth:new-registration', function(e, user) {
  //   $scope.user = user;
  // });

  // $scope.$on('auth:login', function(e, user) {
  //   $scope.user = user;
  // });

  // $scope.$on('auth:logout', function(/* e, user */) {
  //   $scope.user = {};
  // });
});
