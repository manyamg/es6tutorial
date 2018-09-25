var Module = (function () {
  // code
})();

var Module = (function () {
  
  var privateMethod = function () {
    // do something
  };

})(); //privateMethod is not accessible


//module returning an object 
var Module = (function () {
  
  return {
    publicMethod: function () {
      // code
    }
  };

})(); //Module.publicMethod();

//example one 
var Module = (function () {

  // locally scoped Object
  var myObject = {};

  // declared with `var`, must be "private"
  var privateMethod = function () {};

  myObject.someMethod = function () {
    // take it away Mr. Public Method
  };
  
  return myObject;

})();

//example 2 

var Module = (function () {

  var privateMethod = function () {
    // private
  };

  var someMethod = function () {
    // public
  };

  var anotherMethod = function () {
    // public
  };
  
  return {
    someMethod: someMethod,
    anotherMethod: anotherMethod
  };

})();


//accessing private methods
var Module = (function () {

  var _privateMethod = function (message) { // _ is naming convention for private method
    console.log(message);
  };

  var publicMethod = function (text) {
    _privateMethod(text);
  };
  
  return {
    publicMethod: publicMethod
  };

})();

// Example of passing data into a private method
// the private method will then `console.log()` 'Hello!'
Module.publicMethod('Hello!');


var counter = (function(){
    var i = 0;

    return {
      get: function(){
        return i;
      },
      set: function( val ){
        i = val;
      },
      increment: function() {
        return ++i;
      }
    };
  }());

  // `counter` is an object with properties, which in this case happen to be
  // methods. 
  // counter.i; // undefined (`i` is not a property of the returned object)
  ; // ReferenceError: i is not defined (it only exists inside the closure)

  counter.get(); // 0
  counter.set( 3 );
  counter.increment(); // 4
  counter.increment(); // 5