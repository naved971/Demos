function Shape()
{

	
	this.x = 0;
	this.y=0;


}


Shape.prototype.Move = function(x,y)
{

debugger
	this.x+=x;
	this.y+=y;

	console.log(' x is : ' + this.x + ' y is : '  + this.y);
	console.log('Shaped Moved');


}


//Rectangle
function Rectangle()
{
		Shape.call(this); // calling share constructor


} 




Rectangle.prototype.Addy=function()
{

return arguments[0] + arguments[1];

}



Rectangle.prototype = Object.create(Shape.prototype)


var r = new Rectangle();




//console.log('Adding '  + r.Addy(10,2));




//	console.log(angular.injector().annotate(Shape.Move));

function SuperClass()
{
	this.supername = 'naved';

}


SuperClass.prototype.Add = function()
{

	return arguments[0]+arguments[1];
}

function otherSuperClass(){


	this.otherSuperClass  = 'Umair ';

}
function MyClass()
{

	this.currentO = 'this is current';

	SuperClass.call(this);
	otherSuperClass.call(this);

}

MyClass.prototype  = Object.create(SuperClass.prototype);
//mixin(MyClass.prototype, OtherSuperClass.prototype);

var mc = new MyClass();





var v1={my:'hello V1'};
var v2={my:'hello V2'};
function Preview(para1, para2)
{



//alert(this.my + ' ' +  para1 + ' ' + para2)
           
           console.log(this.my,this.my, para1, para2);

}


var obj1 = new Object();

obj1.count = function(){


	return 10;
}


var obj2 = new Object();

