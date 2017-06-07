angular.module('researcher', ['ui.router', 'templates'])
.config([
'$stateProvider',
'$urlRouterProvider',
function($stateProvider, $urlRouterProvider) {

  $stateProvider
    .state('home', {
    	url: '/home',
    	templateUrl: 'home/_home.html',
    	controller: 'MainCtrl',
      resolve: {
        articlePromise: ['articles', function(articles){
          return articles.getAll();
        }]
      }
  	})

    .state('articles', {
    	url: '/articles/{id}',
    	templateUrl: 'articles/_articles.html',
    	controller: 'ArticlesCtrl',
      resolve: {
        article: ['$stateParams', 'articles', function($stateParams, articles) {
          return articles.get($stateParams.id);
        }]
      }
    });

  $urlRouterProvider.otherwise('home');
}])

