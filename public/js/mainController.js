angular.module('campsApp')
  .controller('MainController', MainController)

MainController.$inject = ['$scope', '$rootScope', '$state', 'UserService']

function MainController($scope, $rootScope, $state, UserService) {
  $rootScope.$on('$stateChangeStart', function(event, toState, toParams, fromState, fromParams) {
    UserService.getUserStatus()
      .then(function(data) {
        $scope.currentUser = data.data.user
        if (toState.restricted && !UserService.isLoggedIn()) {
          $state.go('login');
        }
      })
  })

  $scope.isLoggedIn = function() {
    return UserService.isLoggedIn()
  }

}
