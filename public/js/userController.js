angular.module('campsApp')
  .controller('UsersController', UsersController)


UsersController.$inject = ["$http"]

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

function loginController)
