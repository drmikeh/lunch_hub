'use strict';

angular.module('lunchHubApp')
.service('GroupService', function($http) {

  this.getGroups = function() {
    // return a promise
    return $http.get('/api/groups');
  };

});
