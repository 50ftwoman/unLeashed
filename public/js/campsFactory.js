angular.module('campsApp')
  .factory('CampFactory', CampFactory)

CampFactory.$inject = ['$http']

function CampFactory($http){
  var apiUrl = '/api'


  //by state in US
  function index(state = '') {
    return $http.get('/api?state=' + state )
  }

  function show(camp) {
    return $http.get(apiUrl + '/camp?campID=' + camp.contractID + '&facilityID=' + camp.facilityID )
  }

  // function getInfo(camps) {
  //   return $http.get(camps.facilityName + camps.facilityPhoto)
  // }

  return {
    index   : index,
    show    : show
    // getInfo : getInfo
  }

}
