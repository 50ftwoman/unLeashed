angular
  .module('campsApp', ['ui.router', 'ui.bootstrap'])
    .config(MainRouter);

    // CampController.$inject = ['CampFactory']

    MainRouter.$inject = ['$stateProvider', '$urlRouterProvider'];

    function MainRouter($stateProvider, $urlRouterProvider) {



      $stateProvider
        .state('home', {
          url: '/',
          templateUrl: '../camps_template/home.html',
        })
        .state('search', {
          url: '/search',
          templateUrl: '../camps_template/search.html'
        })
        .state('about', {
          url: '/about',
          templateUrl: '../camps_template/about.html'
        })
        .state('signup', {
          url: '/signup',
          templateUrl: '../camps_template/signup.html'
        })
        .state('login', {
          url: '/login',
          templateUrl: '../camps_template/login.html'
        })
        .state('campinfo', {
          url: '/campinfo',
          templateUrl: '../camps_template/campinfo.html',
          params: {
            selectedCamp : null
          }
        })
        .state('logout', {
          url: '/logout',
          controller: 'LogoutController'
        })
        .state('profile', {
          url: '/profile',
          templateUrl: '../camps_template/profile.html',
          restricted: true
        });

        $urlRouterProvider.otherwise('/');
    }
