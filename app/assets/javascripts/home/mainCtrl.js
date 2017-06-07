angular.module('researcher')

.controller('MainCtrl', ['$scope', 'articles', function($scope, articles){

	$scope.appTitle = 'Just Right Researcher';
	$scope.articles = articles.articles;

	$scope.addArticle = function(){
	
		articles.create({
			title: $scope.form.title,
			url: $scope.form.url,
			level: $scope.form.level,
		});

		$scope.form = {
			title: '',
			url: '',
			level: ''
		};
	};

	$scope.deleteArticle = function(id) {

		articles.delete(id);
		
	};

	$scope.debug = function(article) {

		console.log('Article: ', article);
		
	};
}])