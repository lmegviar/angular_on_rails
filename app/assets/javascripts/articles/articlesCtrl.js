var app = angular.module('researcher');

app.controller('ArticlesCtrl', ['$scope', 'articles', 'article', function($scope, articles, article){
	$scope.article = article;
	console.log('Article from ArticlesCtrl: ', article);
	$scope.addDetail = function(){
		$scope.article.details.push($scope.newDetail);
		$scope.newDetail = '';
	};
}])
