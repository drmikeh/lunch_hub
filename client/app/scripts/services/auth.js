'use strict';

angular.module('lunchHubApp')
.service('AuthService', function($http /*, $q */) {

  var that = this;

  that.currentUser = null;

  that.isAuthenticated = function() {
    return !!that.currentUser;
  };

  that.mockUser = {
    name: 'Mock User',
    email: 'mock_user@gmail.com',
    password: 'secret'
  };

  that.register = function(user) {
    console.log('register: user = ' + JSON.stringify(user));
    // return getMockLoginPromise();
    var deferred = $http.post('/api/users', { user: user });
    deferred.success(function(user) {
      that.currentUser = user;
    });
    return deferred;
  };

  that.login = function(session) {
    console.log('login: session = ' + JSON.stringify(session));
    // return getMockLoginPromise();
    var deferred = $http.post('/api/sessions', session);
    deferred.success(function(user, status, headers) {
      that.currentUser = user;
      console.log('login response headers: ' + JSON.stringify(headers));
    });
    return deferred;
  };

  that.logout = function() {
    console.log('logout');
    // return getMockLogoutPromise();
    return $http.delete('/api/sessions');
  };

  // MOCKING
  /*
  function getMockLoginPromise() {
    var deferred = $q.defer();
    setTimeout(function() {
      that.authenticated = true;
      that.currentUser = that.mockUser;
      deferred.resolve(that.currentUser);
    }, 1000);
    return deferred.promise;
  }

  function getMockLogoutPromise() {
    var deferred = $q.defer();
    setTimeout(function() {
      that.authenticated = false;
      that.currentUser = null;
      deferred.resolve(that.currentUser);
    }, 1000);
    return deferred.promise;
  }
  */
});
