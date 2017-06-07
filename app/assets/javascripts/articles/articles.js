angular.module('researcher')
.factory('articles', ['$http', function($http){

	var o = {

		articles: [],

		getAll: function() {
			return $http.get('/articles.json').then(function(res){
				angular.copy(res.data, o.articles);
			});
		},

		create: function(article) {
			return $http.post('/articles.json', article).then(function(res){
				o.articles.push(res.data);
			});
		},

		get: function(id) {
			console.log('Articles.get ran! ID: ' + id);
			return $http.get('/articles/' + id + '.json').then(function(res){
				console.log('Articles factory get req res.data: ', res.data);
				return res.data;
			});
		},

		delete: function(id) {
			return $http.delete('/articles/' + id + '.json').then(function(res){
				console.log('Deleted!');
				o.getAll();
			});
		}
	};

	return o;
}])