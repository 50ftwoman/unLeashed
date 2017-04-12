angular
  .module('campsApp', ['ui.router'])
    .config(MainRouter);

    // CampController.$inject = ['CampFactory']

    MainRouter.$inject = ['$stateProvider', '$urlRouterProvider'];

    function MainRouter($stateProvider, $urlRouterProvider) {



      $stateProvider
        .state('home', {
          url: '/',
          templateUrl: '../camps_template/home.html'
        })
        .state('search', {
          url: '/search',
          templateUrl: '../camps_template/search.html'
        })
        .state('about', {
          url: '/about',
          templateUrl: '../camps_template/about.html'
        });

        $urlRouterProvider.otherwise('/');
    }
