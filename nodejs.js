
 (function(){

var express= require('express');
var app = express();
var fs = require('fs');

app.use(express.static(__dirname + '/public'))
	



app.get('/getcustomer',function(req,res){

var filePath = __dirname + '/customer.json';
	
	fs.exists(filePath,function(exists){
		
		if(!exists)
			 res.send('not found');


	
		fs.readFile(filePath,'utf-8',function(err,data){
			console.log("first");
			setImmediate(function(){
			console.log("second");
			});
			console.log("third");
					res.json(data)

			})
	})

		//res.json(customers);

}).listen(201,function(){
	console.log('server running ..... port 201');
})


})();
