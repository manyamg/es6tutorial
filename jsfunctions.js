//define a  function 
function test() { 
    console.log("function called") 
 } 
 //call the function 
 test()

 // function with return values
 function retStr() { 
    return "hello world!!!" 
 }  
 var val = retStr() 
 console.log(val);

 //parameterised function
 function add( n1,n2) { 
    var sum = n1 + n2 
    console.log("The sum of the values entered "+sum) 
 } 
 add(12,13) 

 //default functional params
 function add(a, b = 1) { 
    return a+b; 
 } 
 console.log(add(4))
 console.log(4,3)

//rest params as param to function
 function fun1(...params) { 
    console.log(params.length); 
 }  
 fun1();  
 fun1(5); 
 fun1(5, 6, 7); 

 //Anonymous Function
 var f = function(){ return "hello"} 
console.log(f())

// function as constructor 

var func = new Function("x", "y", "return x*y;"); 
function product() { 
   var result; 
   result = func(10,20); 
   console.log("The product : "+result)
} 
product()

// far arrow or lamda functions
var foo = (x)=>10+x 
console.log(foo(10)) 

//function hoisting 
hoist_function();  
function hoist_function() { 
   console.log("foo"); 
} 
// output foo

//hoist_function(); // TypeError: hoist_function() is not a function  
var hoist_function = function() { 
   console.log("bar"); 
};

//IIFE
//avoid variable hoisting from within blocks
//self-executing anonymous function
//It allows public access to methods while retaining privacy for variables defined within the function
var main = function() { 
    var loop = function() { 
       for(var x = 0;x<5;x++) {
          console.log(x); 
       } 
    }(); 
    console.log("x can not be accessed outside the block scope x value is :"+x); 
 } 
 main();


 // Assignment of a function expression to a variable
var myFunction = function () { /* logic here */ };

// Assignment of a function expression to a property
var myObj = {
    myFunction: function () { /* logic here */ }
};


(function () {
    var foo = "bar";

    // Outputs: "bar"
    console.log(foo);
})();

// ReferenceError: foo is not defined
//console.log(foo);

//IFFE with params
var foo = "foo";

(function (innerFoo) {
    // Outputs: "foo"
    console.log(innerFoo);
})(foo);










