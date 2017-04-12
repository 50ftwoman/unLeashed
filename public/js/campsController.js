  angular
    .module('campsApp')
    .controller('CampController', CampController)

CampController.$inject = ['CampFactory']

function CampController(CampFactory) {
  var self = this
  self.allCamps = []
  self.getCamps = getCamps

  function getCamps(state) {
    var state = state.toUpperCase()
    CampFactory.index(state)
    .success(function(data) {
      self.allCamps = data
      console.log(self.allCamps)
      console.log(self.allCamps[1])
    });
  }
}
