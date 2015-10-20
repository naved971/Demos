
(function(){

		var ang = angular.module('myMod');


var counter=0	;

var dcounter=0	;

var counterDigest=0	;
var counterDigest2=0;
	
	ang.controller('indexCtrl',function($scope,getCustomers,myFactory){



		window.clickMe=function(){

				//debugger;
				//$scope.$$postDigest(function(){

				var customer = {x:10};
			
			/*	console.log("----------Service -----------");
				//debugger;
				//var serviceBound = getCustomers.bind(customer);
				$scope.serviceReturn = "This is Service "+ getCustomers.log();
				$scope.factoryReturn = "This is Factory "+ myFactory;
				console.log(getCustomers)	;
						
				console.log("----------Service -----------");
				
				console.log("----------Factory -----------");
				
				console.log(myFactory)

				console.log("----------Factory -----------");



					console.log("calling first time in Click Me " + ++counterDigest2)
				//})
			*/

			$scope.$parent.customerName = "This is Customer from Naved $rootScope";
			console.log($rootScope)
				//$scope.$apply();
		}

			//console.log(window.clickMe)

		window.clkMe=function(event){
				//debugger
				 console.log(event.target.innerText + 'from direct');
				
				//$scope.$eval(function(){

					console.log(event.target.innerText + 'from $eval')

				//});
				

		}	


		//$scope.$on('$routeChangeStar')

	});


		ang.controller('homeCtrl',function($scope){

				$scope.HelloWorld = "How are you";
				$scope.HelloWorld1 = "How are you";
								$scope.HelloWorlds1 = "sHow are you";

			//	setTimeout(function(){
				$scope.Details =['D1','D2','D3'];
					
					$scope.$$postDigest(function(){
							
						$scope.HelloWorld="I am Fine  : " + ++counterDigest + '<br/>'; 
						$scope.HelloWorld1 ="I am Fine1  : " + ++counterDigest;
						console.log('Dirty checking done :  ' + ++dcounter);
							//$scope.$applyAsync();
					});
					

/*
					$scope.$watch(function(){
							console.log('Calling from watch ' + ++counter)

					})


					$scope.$apply(function(){

						console.log('applied one')

					})

					$scope.$apply(function(){


						console.log('applied two')
					})

					$scope.$apply(function(){
						console.log('applied three')
					});
*/
					
			//	},1000*1);
		});

		ang.controller('myCtrl1',['$scope','$location',function($scope,$location){
			
			var c1 = this;
			//setTimeout(function(){
				$scope.$$postDigest(function(){
					$scope.Cus =['1','2','3','4','ss','dd',"d","asdf"];
				});
				$scope.$applyAsync();

				c1.Demo1 ="Hello from Ctrl1";

				$scope.$parent.homeRootScope= "this is calling from root scpe";
			//},0)
			
			//var childscope =$scope.$new();
			//console.log(childscope)
			//console.log($location)


		}]);
		
		ang.controller('page1NestedCtrl',function($scope){

				var digCounter=0;
			
				$scope.counter=0;
					
					$scope.$watch(function(newval,oldval){
						//console.log('scope new id : '+ newval.$id , 'scope old id : ' + oldval.$id);

						console.log(newval)
						digCounter++;
						console.log('diget life cycle calling : ' + digCounter )

						if($scope.counter>4 && $scope.counter<10)
							$scope.counter++;

					})



			$scope.clickMe=function(){

				$scope.counter++;
				console.log('you clicked button');
			}


		})

		ang.controller('myCtrl2',['$scope','$controller','getCustomers','$timeout',function(scope,controller,getCustomers,$timeout){

						var vm = this;
                   setTimeout(function(){ //use angular $timeout 
						scope.numbers =[1,2,3,4,56,6,6];
				
								vm.users =[
									{"id":1, name : "umair0",address:"Delhi"},
									{"id":2,	name : "umair1",address:"Jaipur"},
									{"id":3,name : "umair2",address:"Punjab"},
									{"id":4, name : "umair3",address:"Ajmer"},
									{"id":4, name : "umair3",address:"Ajmer"}
								];

						scope.$apply();
				},0)

			
		
				//debugger
				//var myCtrl1Scope= scope.$new();
				//controller('myCtrl1',{$scope:myCtrl1Scope});
				//var a= controller('myCtrl1',{$scope:myCtrl1Scope});
				//scope.Cus2=	myCtrl1Scope.Cus;

				getCustomers.Customers().then(function(result){
					vm.data=angular.fromJson(result.data);
					scope.$applyAsync();
				})

		}])

			
})()