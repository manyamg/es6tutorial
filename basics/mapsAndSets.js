let map = new Map();

map.set('1', 'str1');   // a string key
map.set(1, 'num1');     // a numeric key
map.set(true, 'bool1'); // a boolean key

// remember the regular Object? it would convert keys to string
// Map keeps the type, so these two are different:
alert( map.get(1)   ); // 'num1'
alert( map.get('1') ); // 'str1'

alert( map.size ); // 3

let map = new Map([
    ['1',  'str1'],
    [1,    'num1'],
    [true, 'bool1']
  ]);


  let map = new Map(Object.entries({
    name: "John",
    age: 30
  }));  //[ ["name","John"], ["age", 30] ]

  //iteration over map

  let recipeMap = new Map([
    ['cucumber', 500],
    ['tomatoes', 350],
    ['onion',    50]
  ]);
  
  // iterate over keys (vegetables)
  for (let vegetable of recipeMap.keys()) {
    alert(vegetable); // cucumber, tomatoes, onion
  }
  
  // iterate over values (amounts)
  for (let amount of recipeMap.values()) {
    alert(amount); // 500, 350, 50
  }
  
  // iterate over [key, value] entries
  for (let entry of recipeMap) { // the same as of recipeMap.entries()
    alert(entry); // cucumber,500 (and so on)
  }

  for (const [key, value] of map) {
    console.log(`${key} = ${value}`); // hobby = cycling  [object Object] = [object Object]
  }
  
  map.forEach((value, key) => {
    console.log(`${key} = ${value}`);
  }, map); // hobby = cycling  [object Object] = [object Object]
  



//A Set is a collection of values, where each value may occur only once.

let set = new Set();

let john = { name: "John" };
let pete = { name: "Pete" };
let mary = { name: "Mary" };

// visits, some users come multiple times
set.add(john);
set.add(pete);
set.add(mary);
set.add(john);
set.add(mary);

// set keeps only unique values
alert( set.size ); // 3

for (let user of set) {
  alert(user.name); // John (then Pete and Mary)
}

//Iteration over Set
let set = new Set(["oranges", "apples", "bananas"]);

for (let value of set) alert(value);

// the same with forEach:
set.forEach((value, valueAgain, set) => {
  alert(value);
});


//Map and Set's references to objects are strongly held and will not allow for garbage collection. 
//This can get expensive if maps/sets reference large objects that are no longer needed,ES6 also introduces two new weak collections called WeakMap and WeakSet. 
//These ES6 collections are 'weak' because they allow for objects which are no longer needed to be cleared from memory.
// The same methods Map has for iterators are also supported:

// set.keys() – returns an iterable object for values,
// set.values() – same as set.keys, for compatibility with Map,
// set.entries() – returns an iterable object for entries [value, value], exists for compatibility with Map.

// WeakMaps have several popular use cases. They can be used to keep an object’s private data private,
let weakMap = new WeakMap();

let obj = {};

weakMap.set(obj, "ok"); // works fine (object key)

weakMap.set("test", "Whoops"); // Error, because "test" is a primitive

let john = { name: "John" };

let weakMap = new WeakMap();
weakMap.set(john, "...");

john = null; // overwrite the reference

// john is removed from memory!

var key1 = { foo: 1 };
var key2 = { bar: ['a', 'b', 'c'] };

var x = new WeakMap([[key1, 'value 1'], [key2, 'value 2']]);

console.log(x.get(key1));
console.log(x.get(key2));  //value 1 value 2

//more examples

var key1 = { foo: 1 };
var key2 = { bar: ['a', 'b', 'c'] };

var x = new WeakMap([[key1, 'value 1'], [key2, 'value 2']]);

console.log(x.get(key1)); //value 1
console.log(x.get(key2)); //value 2

x.delete(key1);

console.log(x.get(key1)); //undefined
console.log(x.get(key2)); //value 2


// Use for (... of ...) loop to get the values of an iterable
for (var x of arr) {
    console.log(x);
  } 
  
  // Under the covers, for (... of ...) does the following: 
  var iterator = arr[Symbol.iterator]();
  var current = iterator.next();
  while (!current.done) {
    console.log(current.value);
    current = iterator.next();
  }



  //more examples
  // Private properties store:
let Person = (() => {
    let names = new WeakMap;
    return class {
      constructor(name) {
        names.set(this, name);
      }
      getName() {
        return names.get(this);
      }
    }
  })();
  
  let person = new Person('Vasya');
  console.log(person.getName());            // => 'Vasya'
  for (let key in person) console.log(key); // => only 'getName'



