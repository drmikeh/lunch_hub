'use strict';

angular.module('lunchHubApp')
.controller('GroupCtrl', function($scope, GroupService) {

  function getGroups() {
    GroupService.getGroups()
    .success(function(data /*, status, headers, config */) {
      $scope.groups = data;
    })
    .error(function(/* data, status, headers, config */) {
      alert('GET: error');
    });
  }

  getGroups();

  $scope.updateGroup = function(group) {
    return GroupService.updateGroup(group)
    .success(function() {
      getGroups();
    })
    .error(function(data, status) {
      console.log(data);
      alert('EDIT ERROR: ' + status + ' : ' + JSON.stringify(data));
    });
  };

  $scope.addGroup = function() {
    var newGroup = { name: $scope.newGroupName };
    GroupService.addGroup(newGroup)
    .success(function() {
      $scope.newGroupName = null;
      getGroups();
    })
    .error(function(data, status) {
      console.log(data);
      alert('SAVE ERROR: ' + status + ' : ' + JSON.stringify(data));
    });
  };

  $scope.destroyGroup = function(group) {
    GroupService.destroyGroup(group)
    .success(function() {
      getGroups();
    })
    .error(function(data, status) {
      console.log(data);
      alert('DESTROY ERROR: ' + status + ' : ' + JSON.stringify(data));
    });
  };

});
