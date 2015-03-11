'use strict';

angular.module('lunchHubApp')
.controller('AuthCtrl', function ($scope, $rootScope, $state, AuthService) {
  console.log('AuthCtrl is alive!');

  $scope.register = function() {
    console.log('AuthCtrl.register');
    AuthService.register($scope.user).then(function(user) {
      $rootScope.$emit('auth:new-registration', user);
      $state.go('home');
    });
  };

  $scope.login = function() {
    console.log('AuthCtrl.login');
    AuthService.login($scope.user).then(function(user) {
      $rootScope.$emit('auth:login', user);
      $state.go('home');
    });
  };

});
