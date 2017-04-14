angular.module('campsApp')
  .controller('NavController', NavController)

NavController.$inject = ['$log', 'UserService']

function NavController($log, UserService) {
  var self = this
  self.UserService = UserService

  $log.info('NavController loaded')
}
