
// quick demo of prototypes

var arr = new Array([1,2,3,4]); // Array Object

Array.prototype.sayHi = function() {
	// were adding this "on the fly"
	console.log("Hi from mr. array!", this);
};

arr.sayHi();