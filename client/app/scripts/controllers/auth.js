'use strict';

angular.module('lunchHubApp')
.controller('AuthCtrl', function ($scope, $state, AuthService) {
  console.log('AuthCtrl is alive!');

  $scope.login = function() {
    AuthService.login($scope.user).then(function(){
      $state.go('groups');
    });
  };

  $scope.register = function() {
    AuthService.register($scope.user).then(function(){
      $state.go('groups');
    });
  };

});
