  angular
    .module('campsApp')
    .controller('CampController', CampController)

  CampController.$inject = ['CampFactory']

  function CampController(CampFactory) {
    var self = this
    self.allCamps = []
    self.getCamps = getCamps

    function getCamps(state) {
      CampFactory.index(state)
      .success(function(data) {
        self.allCamps = data
        console.log(self.allCamps)
    });
  }

}
