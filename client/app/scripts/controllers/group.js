'use strict';

angular.module('lunchHubApp')
.controller('GroupCtrl', function($scope, GroupService) {

  GroupService.getGroups()
  .success(function(data /*, status, headers, config */) {
    // this callback will be called asynchronously
    // when the response is available
    $scope.groups = data;
  })
  .error(function(/* data, status, headers, config */) {
    alert('Something went wrong getting the groups.');
  });

});
