angular
  .module('campsApp', ['ui.router'])
    .config('MainRouter');

    MainRouter.$inject = ['$stateProvider', '$urlRouterProvider'];

    function MainRouter($stateProvider, $urlRouterProvider) {
      $stateProvider
        .state('home', {
          url: '/',
          templateUrl: 'index.html'
        })
        .state('search', {
          url: '/search',
          templateUrl: 'search.html'
        });
        $urlRouterProvider.otherwise('/')
    }
