app.controller('pokeCtrl', function($scope, pokeService){
	
	$scope.getMon = function(id){
		// console.log(id);
		$scope.getPokemon = pokeService.getPokemon(id).then(function(data){
			$scope.pokeObj = data;

			if(id.toString().length === 2){
				$scope.gifsrc = 'http://sprites.pokecheck.org/i/0' + id + '.gif';
			} else if (id.toString().length === 1){
				$scope.gifsrc = 'http://sprites.pokecheck.org/i/00' + id + '.gif';
			} else {
				$scope.gifsrc = 'http://sprites.pokecheck.org/i/' + id + '.gif';
			}
		})
	}
});