angular.module('unLeashed')
.controller('CampsController', CampsController)

CampsController.$inject = ['$http']
function CampsController($http){
  var self = this
  self.all = []
  self.newCamp = {}

  self.addCamp = addCamp
  self.getCamps = getCamps
  self.deleteCamp = deleteCamp

  getCamps()

function getCamps(){
  $http
    .get('/camps')
    .then(function(response){
      self.all = response.data
    })
}

function addCamp(){
  $http
    .post('/api/camps', self.newCamp)
    .then(function(response){
      getCamps()
    })
    self.newCamp = {}
}

function deleteCamp(camp){
  $http
    .delete('/api/camps/' + )
}

}
