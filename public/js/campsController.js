angular
  .module('campsApp')
  .controller('CampController', CampController)

CampController.$inject = ['$http', 'CampFactory', 'UserService', '$state', '$stateParams']

function CampController($http, CampFactory, UserService, $state, $stateParams) {
  var self = this
  self.allCamps = []
  self.getCamps = getCamps
  // self.selectedCamp = "test"
  self.setSelectedCamp = setSelectedCamp
  self.addCamp = addCamp
  // self.test = "test"
  if ($stateParams != null) {
    self.selectedCamp = $stateParams.selectedCamp
  }
  console.log($stateParams)

  function getCamps(state) {
    self.state = state.toUpperCase()
    CampFactory.index(self.state)
      .success(function(data) {
        self.allCamps = data
        console.log(self.allCamps)
        console.log(self.allCamps[1])
      });
  }

  function addCamp() {


    var camp = {
      facilityName: self.selectedCamp.facility,
      stateName: self.state,
      description: self.selectedCamp.description
    }
    $http.post('/profile', camp)
      .then(function(data) {
        console.log(data)
      })
  }

  function setSelectedCamp(camp) {
    // console.log(camp.facilityID)
    // console.log(camp.contractID)
    CampFactory.show(camp)
      .success(function(data) {
        self.selectedCamp = data.detailDescription['$']
        console.log(self.selectedCamp)
        redirect(self.selectedCamp)
      })
  }

  function redirect(camp) {
    $state.go('campinfo', {selectedCamp: camp})
  }
}


//'http://api.amp.active.com/camping/campground/details?contractCode=' + camp.contractID + '&parkId=' + camp.facilityID + '&api_key=hpsp3pj5sexdxpn3d36w57h9'
