angular.module('campsApp')
  .controller('UsersController', UsersController)
  .controller('LoginController', LoginController)
  .controller('LogoutController', LogoutController)
  .controller('SignupController', SignupController)

LoginController.$inject = ['$state', 'UserService']
LogoutController.$inject = ['$state', 'UserService']
SignupController.$inject = ['$state', 'UserService']
UsersController.$inject = ["$http"]

function LoginController($state, UserService){
  var self = this
  self.login = function() {

    this.error = false
    this.disabled = true

    UserService.login(this.loginForm.email, this.loginForm.password)
    .then(function() {
      console.log('successful login')
      $state.go('profile')
      this.disabled = false
      this.loginForm = {}
    })

    .catch(function() {
      console.log('whoops')
      this.error = true
      this.errorMessage = 'invalid'
      this.disabled = false
      this.loginForm = {}
    })
  }
}

function LogoutController($state, UserService) {
  var vm = this

  // call logout from service
  UserService.logout()
    .then(function () {
      $state.go('login')
    })
}

// SIGNUP CONTROLLER:
function SignupController($state, UserService) {
  var vm = this
  vm.signup = function () {

    // initial values
    vm.error = false
    vm.disabled = true

    // call register from service
    UserService.signup(vm.signupForm.email, vm.signupForm.password)
      // handle success
      .then(function () {
        $state.go('profile')
        vm.disabled = false
        vm.signupForm = {}
      })
      // handle error
      .catch(function () {
        vm.error = true
        vm.errorMessage = "Something went wrong!"
        vm.disabled = false
        vm.signupForm = {}
      })
  }
}

function UsersController($http){
  var self     = this
  self.all     = []
  self.newUser = {}

  self.getUsers     = getUsers
  self.deleteUser   = deleteUser
  self.editUser     = editUser
  self.setUser      = setUser
  self.selectedUser = {}

getUsers()

function getUsers(){
  $http
    .get('/api/users')
    .then(function(response){
      self.all = response.data
    })
}


function showUser(){
  $http
    .get('/profile', {headers: {'user' : self.selectedUser}})

    .then(function(response){
      console.log(response)
    })
}
setUser()
showUser()

function setUser(user){
  self.selectedUser = user
}

function editUser(user) {
  $http
    .patch('/api/users' + self.SelectedUser._id, self.selectedUser)
    .then(function(response){
      getUsers()
    })
    self.selectedUser = {}
}

function deleteUser(user){
  $http
  .delete('/api/users/' + user._id)
  .then(function(response){
    getUsers()
  })
}

}
