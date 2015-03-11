'use strict';

angular.module('lunchHubApp')
.service('AuthService', function($q) {

  var that = this;

  that.isAuthenticated = function() {
    return false;
  };

  that.currentUser = function() {
    // TODO:
    var currentUser = null;
    var deferred = $q.defer();
    setTimeout(function() { deferred.resolve(currentUser); }, 1000);
    return deferred.promise;
  };

  that.register = function(user) {
    console.log('register: user = ' + JSON.stringify(user));
    // TODO: return a promise
  };

  that.login = function(user) {
    console.log('login: user = ' + JSON.stringify(user));
    // TODO: return a promise
  };

  that.logout = function() {
    console.log('logout');
    // TODO:
  };

});
