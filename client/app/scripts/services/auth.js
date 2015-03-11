'use strict';

angular.module('lunchHubApp')
.service('AuthService', function($q) {

  var that = this;

  that.authenticated = false;

  that.isAuthenticated = function() {
    return that.authenticated;
  };

  that.mockUser = {
    name: 'Mock User',
    email: 'mock_user@gmail.com',
    password: 'secret'
  };

  that.getCurrentUser = function() {
    console.log('getCurrentUser');
    // TODO:
    var deferred = $q.defer();
    setTimeout(function() {
      deferred.resolve(that.currentUser);
    }, 1000);
    return deferred.promise;
  };

  that.register = function(user) {
    console.log('register: user = ' + JSON.stringify(user));
    var deferred = $q.defer();
    setTimeout(function() {
      that.authenticated = true;
      that.currentUser = that.mockUser;
      deferred.resolve(that.currentUser);
    }, 1000);
    return deferred.promise;
  };

  that.login = function(user) {
    console.log('login: user = ' + JSON.stringify(user));
    var deferred = $q.defer();
    setTimeout(function() {
      that.authenticated = true;
      that.currentUser = that.mockUser;
      deferred.resolve(that.currentUser);
    }, 1000);
    return deferred.promise;
  };

  that.logout = function() {
    console.log('logout');
    var deferred = $q.defer();
    setTimeout(function() {
      that.authenticated = false;
      that.currentUser = null;
      deferred.resolve(that.currentUser);
    }, 1000);
    return deferred.promise;
  };

});
