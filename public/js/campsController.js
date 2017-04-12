  angular
    .module('campsApp')
    .controller('CampController', CampController)

CampController.$inject = ['CampFactory']

function CampController(CampFactory) {
  var self = this
  self.allCamps = []
  self.getCamps = getCamps
  self.selectedCamp = selectedCamp

  function getCamps(state) {
    var state = state.toUpperCase()
    CampFactory.index(state)
    .success(function(data) {
      self.allCamps = data
      console.log(self.allCamps)
      console.log(self.allCamps[1])
    });
  }


  function selectedCamp(camp) {
    console.log(camp.facilityID)
    console.log(camp.contractID)
    CampFactory.show(camp)
      .success(function(data) {
        self.selectedCamp = data.detailDescription['$'].description
        console.log(self.selectedCamp)
      })
  }
}

//'http://api.amp.active.com/camping/campground/details?contractCode=' + camp.contractID + '&parkId=' + camp.facilityID + '&api_key=hpsp3pj5sexdxpn3d36w57h9'
