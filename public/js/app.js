angular
  .module('campsApp', ['ui.router'])
  .controller('CampController', CampController)

CampController.$inject = ['CampFactory']

function CampController(CampFactory) {
  var self = this
  self.allCamps = []

  CampFactory.index()
    .success(function(data) {
      self.allCamps = data
      console.log(self.allCamps)
    });

}
