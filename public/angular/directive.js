(function(){
	

	var app = angular.module('myMod');

	app.directive('smDir',function(){

		return{
				restrict:'E',
				transclude :true,
				template:"<div>{{label}}<div ng-transclude></div></div>",
				compile:myCompile,
				link:myLink,
				controller:myController
			}


	});





	function myCompile(element,attr)
	{
		//console.log('this is compiler')
		//console.log(element)

	}
	function myLink(scope,element,attr){

		//console.log('this is link function')
	}
	function myController ($scope,$element)
	{
		$scope.label ="calling from myController";
		//console.log('this is myController')
		//console.log($element)

	}




	app.directive('enter',function(){

		return function link(scope,element,attr)
		{

			element.bind('mouseenter',function(){
				element.addClass(attr.enter)
			})
		}
	});
})();