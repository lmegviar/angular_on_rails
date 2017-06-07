var app = angular.module('researcher');

app.controller('MainCtrl', ['$scope', 'articles', function($scope, articles){

	$scope.appTitle = 'Just Right Researcher';
	$scope.articles = articles.articles;
	$scope.show = {};

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

	$scope.toggle = function(id) {
		if($scope.show[id]) {
			$scope.show[id] = false;
		} else {
			$scope.show[id] = true;
		}

		console.log('Scope.show: ', $scope.show);
	}

}])