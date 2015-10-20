(function(){
	

	var app = angular.module('myMod');


function myFactory(){

		var object = {};

		object.customer =function(){};

		return object;


}

myFactory.prototype.log=function(){


	return 'calling from factory';
}

	app.factory('myFactory',myFactory);



})();