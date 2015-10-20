(function(){

 	var app= angular.module('myMod');


 	app.config(['$routeProvider','$locationProvider' ,function($routeProvider,$locationProvider){


 				var page1= {templateUrl: 'partials/page1.html',controller:'myCtrl1 as c1' };
 				var page2= {templateUrl: 'partials/page2.html',controller:'myCtrl2 as c2'};
 				var homepage ={templateUrl:'/home.html',controller:'homeCtrl'};
 				$routeProvider.when('/page1',page1).when('/page2',page2).when('/',homepage).otherwise({ redirectTo: '/' })

 				$locationProvider.html5Mode({enabled:true,requireBase:false})

	}]);



})();