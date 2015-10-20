(function(){
	var ang = angular.module('myMod');
	function Abc()
	{

		this.HelloABC = "Hello ABC";
	}

	var boundFun = myService.bind(new Abc());

	var abc = new Abc();
	console.log(boundFun);
	ang.service('getCustomers',myService);


	function myService ($http)
		{
			this.name ="hello ";
			this.Customers = function(){
					var promise = $http.get('/getcustomer');
					return promise;
			}

			var object =  {

				Hello:this.name
			};

			//return this; // default return this 

		}

		myService.prototype.log=function(){
				
				//console.log("this is log from prototype")
				return "  log from prototype";
		}


})()