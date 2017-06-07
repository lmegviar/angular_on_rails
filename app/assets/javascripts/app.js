angular.module('researcher', ['templates', 'ngRoute'])
.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
  $routeProvider
    .when('/home', {
      templateUrl: 'home/_home.html',
      controller: 'MainCtrl',
      resolve: {
        articlePromise: ['articles', function(articles){
          return articles.getAll();
        }]
      }
    })
    .when('articles/', {
       templateUrl: 'articles/_articles.html',
       controller: 'ArticlesCtrl',
        resolve: {
          article: ['$route', 'articles', function($route, articles) {
            return articles.get($route.current.params.id);
          }]
        }
      })

    // .otherwise({
    //   redirectTo: '/home'
    // });

    $locationProvider.hashPrefix('');

}]);

// Switched to ngRoute due to incompatibility between angular-rails-templates and latest version of Sprockets gem
// angular.module('researcher', ['ui.router', 'templates'])
// .config([
// '$stateProvider',
// '$urlRouterProvider',
// function($stateProvider, $urlRouterProvider) {

//   $stateProvider
//     .state('home', {
//     	url: '/home',
//     	templateUrl: 'home/_home.html',
//     	controller: 'MainCtrl',
//       resolve: {
//         articlePromise: ['articles', function(articles){
//           return articles.getAll();
//         }]
//       }
//   	})

//     .state('articles', {
//     	url: '/articles/{id}',
//     	templateUrl: 'articles/_articles.html',
//     	controller: 'ArticlesCtrl',
//       resolve: {
//         article: ['$stateParams', 'articles', function($stateParams, articles) {
//           return articles.get($stateParams.id);
//         }]
//       }
//     });

//   $urlRouterProvider.otherwise('home');
// }])

