//Object Initialization From Variables
// ES5 code
var
  a = 1, b = 2, c = 3;
  obj = {
    a: a,
    b: b,
    c: c
  };

// obj.a = 1, obj.b = 2, obj.c = 3

// ES6 code
const
  a = 1, b = 2, c = 3;
  obj = {
    a,
    b,
    c
  };

// obj.a = 1, obj.b = 2, obj.c = 3


//E5 code 
const lib = (() => {

    function sum(a, b)  { return a + b; }
    function mult(a, b) { return a * b; }
  
    return {
      sum,
      mult
    };
  
  })();
  
  console.log( lib.sum(2, 3) );  // 5
  console.log( lib.mult(2, 3) ); // 6

  //ES6 
  // lib.js
function sum(a, b)  { return a + b; }
function mult(a, b) { return a * b; }

export { sum, mult };

// ES5 code
var lib = {
    sum:  function(a, b) { return a + b; },
    mult: function(a, b) { return a * b; }
  };
  
  console.log( lib.sum(2, 3) );  // 5
  console.log( lib.mult(2, 3) ); // 6


  // ES6 code
const lib = {
    sum:  (a, b) => a + b,
    mult: (a, b) => a * b
  };
  
  console.log( lib.sum(2, 3) );  // 5
  console.log( lib.mult(2, 3) ); // 6


  //Dynamic Property Keys
  // ES5 code
var
key1 = 'one',
obj = {
  two: 2,
  three: 3
};

obj[key1] = 1;

// obj.one = 1, obj.two = 2, obj.three = 3

// ES6 code
const
  key1 = 'one',
  obj = {
    [key1]: 1, //ES6 by placing an expression in [ square brackets ]. 
    two: 2,
    three: 3
  };

// obj.one = 1, obj.two = 2, obj.three = 3

//more examples
// ES6 code
const
  i = 2,
  obj = {
    ['mult' + i]: x => x * i
  };

console.log( obj.mult2(5) ); // 10



