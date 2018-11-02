
//Symbols are a new primitive type in ES6 - 
//Symbols are values that programs can create and use as property keys without risking name collisions.
//They’re immutable once created.

var mySymbol1 = Symbol();

var obj = {};
var sym = Symbol();
obj[sym] = "a";
console.log(obj[sym]);  //a 


var obj = {};
var sym = Symbol();
obj['hi'] = "bye";
obj[sym] = "a";

console.log(obj);                    // Prints "{hi: 'bye'}"

for (var i in obj) {
    console.log(i);                    // Prints "hi"
}

console.log(JSON.stringify(obj));    // Prints {"hi":"bye"}




// id is a symbol with the description "id" && Symbols are guaranteed to be unique
let id = Symbol("id");

let id1 = Symbol("id");
let id2 = Symbol("id");

alert(id1 == id2); // false


//In this case the value of symbol is actually taken into account and this way two symbols may be non-unique.

Symbol.for("foo");                // Creates a new global symbol
var sym = Symbol.for("foo");        // Retrieves the already created symbol

//Symbol.for(key) does return the same symbol each time, so:

Symbol.for("bar") === Symbol.for("bar");    // Evaluates to true
Symbol("bar") === Symbol("bar");            // Evaluates to false

var sym = Symbol.for("foo");        // Creates new global symbol
console.log(Symbol.keyFor(sym));    // Prints "foo"


//How do I benefit from using Symbol instead of the older data types?
var persons = {"peter":"pan","jon":"doe"};
console.log(persons.peter);
// pan

//What if we have two persons with the name Peter?

var persons = {"peter":"first", "peter":"pan"};

//t's like a person in real life - any person is unique, but their names can be equal. Let's define two "persons".
var firstPerson = Symbol("peter");
var secondPerson = Symbol("peter");
var persons = {[firstPerson]:"first", [secondPerson]:"pan"};

console.log(persons[a]);
 // first
 console.log(persons[b]);
 // pan

 let user = { name: "John" };

// our script uses "id" property
user.id = "ID Value";

// ...if later another script the uses "id" for its purposes...

user.id = "Their id value"
// boom! overwritten! it did not mean to harm the colleague, but did it!

let id = Symbol("id");
let user = {
  name: "John",
  age: 30,
  [id]: 123
};


//Symbols are skipped by for…in
for (let key in user) alert(key); // name, age (no symbols)

// the direct access by the symbol works
alert( "Direct: " + user[id] );

let id = Symbol("id");
let user = {
  [id]: 123
};

let clone = Object.assign({}, user);

alert( clone[id] ); // 123

//Symbols real use case - Symbols could be a good replacement for strings or integers as class/module constants:


class Application {
    constructor(mode) {
      switch (mode) {
        case Application.DEV:
          // Set up app for development environment
          break;
        case Application.PROD:
          // Set up app for production environment
          break;
         default:
          throw new Error('Invalid application mode: ' + mode);
      }
    }
  }
  
  Application.DEV = Symbol('dev');
Application.PROD = Symbol('prod');

const app = new Application(Application.DEV);

//Also 
const directions = {
    UP   : Symbol( 'UP' ),
    DOWN : Symbol( 'DOWN' ),
    LEFT : Symbol( 'LEFT' ),
    RIGHT: Symbol( 'RIGHT' )
};




//symbols as keys doesn’t guarantee privacy and they never clash with String keys
const user = {};
const email = Symbol();

user.name = 'Fred';
user.age = 30;
user[email] = 'fred@example.com';

Object.keys(user);
// <-- Array [ "name", "age" ]

Object.getOwnPropertyNames(user);
// <-- Array [ "name", "age" ]

JSON.stringify(user);
// <-- "{"name":"Fred","age":30}"

Object.getOwnPropertySymbols(user);
// <-- Array [ Symbol() ]

Reflect.ownKeys(user)
// <-- Array [ "name", "age", Symbol() ]


//symbol as an iterator

const band = ['Freddy', 'Brian', 'John', 'Roger'];
const iterator = band[Symbol.iterator]();

iterator.next().value;
// <-- { value: "Freddy", done: false }
iterator.next().value;
// <-- { value: "Brian", done: false }
iterator.next().value;
// <-- { value: "John", done: false }
iterator.next().value;
// <-- { value: "Roger", done: false }
iterator.next().value;
// <-- { value: undefined, done: true }


//more exmaples making object properties private
let Square = (function() {

    const _width = Symbol('width');

    class Square {
        constructor( width0 ) {
            this[_width] = width0;
        }
        getWidth() {
            return this[_width];
        }
    }

    return Square;  

} )();

//mor and more examples
let Person = (() => {
    let NAME = Symbol('name');
    return class {
      constructor(name) {
        this[NAME] = name;
      }
      getName() {
        return this[NAME];
      }
    }
  })();
  
  let person = new Person('Vasya');
  console.log(person.getName());            // => 'Vasya'
  console.log(person['name']);              // => undefined
  console.log(person[Symbol('name')]);      // => undefined, symbols are uniq
  for (let key in person) console.log(key); // => nothing, symbols are not enumerable

//symbols as iterator
  const band = ['Freddy', 'Brian', 'John', 'Roger'];
const iterator = band[Symbol.iterator]();

iterator.next().value;
// <-- { value: "Freddy", done: false }
iterator.next().value;
// <-- { value: "Brian", done: false }
iterator.next().value;
// <-- { value: "John", done: false }
iterator.next().value;
// <-- { value: "Roger", done: false }
iterator.next().value;
// <-- { value: undefined, done: true }

//symbols with computed method name:

let Person = {
  name: "John",
  age: 14,
  location: "New York",
  [Symbol()]: function() {
          return this.age >= 18;
  }
}

let canVote = Object.getOwnPropertySymbols(Person)[0];
Person[canVote](); // false


//more example 
const age = Symbol("age");
class Person {
        constructor(value) {
                this[age] = value;
        }
        getAge() {
                console.log(this[age]);
        }
}
const jack = new Person(23);
console.log(jack);
// Person {}
console.log(jack.age);
// undefined
console.log(jack[Symbol("age")]);
// undefined
jack.getAge();
// 23