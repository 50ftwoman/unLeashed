angular.module('campsApp')
  .factory('UserService', UserService)

UserService.$inject = ['$q', '$timeout', '$http']

function UserService($q, $timeout, $http) {
  // create user variable
  var user = null

  // return available functions for use in the controllers
  return ({
    isLoggedIn: isLoggedIn,
    getUserStatus: getUserStatus,
    login: login,
    logout: logout,
    signup: signup
  })

  function isLoggedIn() {
    if(user) {
      return true
    } else {
      return false
    }
  }

  function getUserStatus() {
    return $http.get('/users/status')
    // handle success
    .success(function (data) {
      if(data.status){
        user = true
      } else {
        user = false
      }
    })
    // handle error
    .error(function (data) {
      user = false
    })
  }

  function login(email, password) {

    // create a new instance of deferred
    var deferred = $q.defer()

    // send a post request to the server
    $http.post('/users/login', {email: email, password: password})
      // handle success
      .success(function (data, status) {
        if(status === 200 && data.status){
          user = true
          deferred.resolve()
        } else {
          user = false
          deferred.reject()
        }
      })
      // handle error
      .error(function (data) {
        user = false
        deferred.reject()
      })

    // return promise object
    return deferred.promise

  }

  function logout() {

    // create a new instance of deferred
    var deferred = $q.defer()

    // send a get request to the server
    $http.get('/users/logout')
      // handle success
      .success(function (data) {
        user = false
        deferred.resolve()
      })
      // handle error
      .error(function (data) {
        user = false
        deferred.reject()
      })

    // return promise object
    return deferred.promise

  }

  function signup(username, password) {

    // create a new instance of deferred
    var deferred = $q.defer()

    // send a post request to the server
    $http.post('/users/signup',
      {username: username, password: password})
      // handle success
      .success(function (data, status) {
        if(status === 200 && data.status){
          deferred.resolve()
        } else {
          deferred.reject()
        }
      })
      // handle error
      .error(function (data) {
        deferred.reject()
      })

    // return promise object
    return deferred.promise

  }
}
