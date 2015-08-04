var app = angular.module('pokeApp', ['ngRoute']);

app.config(function($routeProvider){
	$routeProvider
		.when('/', {
			templateUrl: 'templates/homeTmpl.html',
			controller: 'pokeCtrl'
		})
		.when('/pokemonCenter', {
			templateUrl: 'templates/pokePicker.html',
			controller: 'pokeCtrl'
		})
		.when('/pokemonCenter/pokeTeam', {
			templateUrl: 'templates/pokeTmpl.html',
			controller: 'pokeCtrl'
		})
		.when('/battleArena', {						
			templateUrl: 'templates/BattleTmpl.html',
			controller: 'battleCtrl'
		})
		.otherwise({
			redirectTo: '/'
		})
		
})