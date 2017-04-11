angular
  .module('campsApp', ['ui.router'])
    .config(MainRouter);

    // CampController.$inject = ['CampFactory']

    MainRouter.$inject = ['$stateProvider', '$urlRouterProvider'];

    function MainRouter($stateProvider, $urlRouterProvider) {



      $stateProvider
        .state('home', {
          url: '/',
          templateUrl: '../camps_template/index.html'
        })
        .state('search', {
          url: '/search',
          templateUrl: '../camps_template/search.html'
        });

        $urlRouterProvider.otherwise('/');
    }
