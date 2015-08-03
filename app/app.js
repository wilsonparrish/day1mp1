var app = angular.module('pokeApp', ['ngRoute']);

app.config(function($routeProvider){
	$routeProvider
		.when('/', {
			templateUrl: 'templates/homeTmpl.html',
			controller: 'pokeCtrl'
		})
		.when('/pokemonCenter', {
			templateUrl: 'templates/pokeTmpl.html',
			controller: 'pokeCtrl'
		})
		.otherwise({
			redirectTo: '/'
		})
		
})