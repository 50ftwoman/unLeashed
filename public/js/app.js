angular
  .module('campsApp', ['ui.router'])
  .config(LeashRouter)

function BeanRouter($stateProvider, $urlRouterProvider){

  // Front end routes using angular ui.router:
  $stateProvider
  .state('index', {
    url: '/',
    templateUrl: 'camps_template/index.html'
  })
  .state('new', {
    url: '/new',
    templateUrl: 'camps_template/search.html'
  });
  // .state('show', {
  //   url: '/beans/:id',
  //   templateUrl: 'camps_template/show.html'
  // });

  // Default (fallback) route:
  $urlRouterProvider.otherwise('/')

}
