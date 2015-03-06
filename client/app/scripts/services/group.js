'use strict';

angular.module('lunchHubApp')
.service('GroupService', function($http) {

  this.getGroups = function() {
    return $http.get('/api/groups');
  };

  this.updateGroup = function(group) {
    console.log('updateGroup: ' + JSON.stringify(group));
    return $http.put('/api/groups/' + group.id, { group: group } );
  };

  this.addGroup = function(group) {
    return $http.post('/api/groups', { group: group } );
  };

  this.destroyGroup = function(group) {
    return $http.delete('/api/groups/' + group.id);
  };

});
