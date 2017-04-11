angular
  .module('unLeashed', ['ui.router'])
  .config(LeashRouter);

function LeashRouter($stateProvider, $urlRouterProvider){

  $urlRouterProvider.otherwise('/home');

  $stateProvider
  .state('home', {
    url         : '/',
    templateUrl : 'home.html'
  })
  .state('search', {
    url         : '/search',
    templateUrl : 'search.html'
  })
  .state('about', {
    url         : '/about',
    templateUrl : 'about.html'
  });
}
