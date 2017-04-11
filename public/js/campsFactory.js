angular.module('campsApp')
  .factory('CampFactory', CampFactory)

CampFactory.$inject = ['$http']

function CampFactory($http){
  var apiUrl = '/api'

  return {
    index   : index,
    show    : show,
    getInfo : getInfo
  }

  function index() {
    return $http.get('/api')
  }

  function show() {
    return $http.get(apiUrl + '/camps' )
  }

  function getInfo(camps) {
    return $http.get(camps.facilityName + camps.facilityPhoto)
  }
}
