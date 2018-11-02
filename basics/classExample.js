//old way of creating function constructor or a class
function Input() {
    this.type = "text";
}

Input.prototype.setType = function(type){ // prototype are reusing the methods and this methods are not hoisted
    this.type = type;
    return this;
}

// usage:  new Input().setType("type")

// new es6 way //behind the scene class proto type inheritence under the good
//class declartions are not hoisted.
class Input {
    static from(text){ //always top of the code, nice to have 
        return   new Input(text);
      }

    constructor() {
        this.type = "text";
    }
      setType(type) {
        this.type = type
        return this;
    }

    //Input.from = text => new TextSpan(text) outside the class
}

Input.prototype.render = function() {
    return this.type
}

function Fruit(title, price) {
    this.title = title;
    this.price = price;
}

Fruit.prototype.priceInfo = function() {
    retrun `Price of the ${this.title} is \
    ${this.price}`;
}

Fruit === Fruit.prototype.constructor // true, hence functions are function constructor
var apple = new Fruit("Apple", 2)
console.log(apple.priceInfo());

class Fruit {
    constructor(title, price) {
        this.title = title;
        this.price = price;
    }
    priceInfo() {
        retrun `Price of the ${this.title} is ${this.price}`;
    }
}

//setters and getters example
class Person { 
    constructor(name) { 
      this._name = name; // {1} 
    } 
    get name() { // {2} 
      return this._name; 
    } 
    set name(value) { // {3} 
      this._name = value; 
    } 
  } 
   
  let lotrChar = new Person('Frodo'); 
  console.log(lotrChar.name); // {4} 
  lotrChar.name = 'Gandalf'; // {5} 
  console.log(lotrChar.name); 
  lotrChar._name = 'Sam'; // {6} 
  console.log(lotrChar.name); 

  //super example
  function Foo(a,b) {
    this.x = a;
    this.y = b;
}

Foo.prototype.gimmeXY = function() {
    return this.x * this.y;
}

class Bar extends Foo {
    constructor(a,b,c) {
        super( a, b );
        this.z = c;
    }

    gimmeXYZ() {
        return super.gimmeXY() * this.z;
    }
}

var b = new Bar( 5, 15, 25 );

b.x;                        // 5
b.y;                        // 15
b.z;                        // 25
b.gimmeXYZ();               // 1875

//more super examples
class ParentA {
    constructor() { this.id = "a"; }
    foo() { console.log( "ParentA:", this.id ); }
}

class ParentB {
    constructor() { this.id = "b"; }
    foo() { console.log( "ParentB:", this.id ); }
}

class ChildA extends ParentA {
    foo() {
        super.foo();
        console.log( "ChildA:", this.id );
    }
}

class ChildB extends ParentB {
    foo() {
        super.foo();
        console.log( "ChildB:", this.id );
    }
}

var a = new ChildA();
a.foo();                    // ParentA: a
                            // ChildA: a
var b = new ChildB();       // ParentB: b
b.foo();                    // ChildB: b


//composition
class Employee {
    constructor(firstName, familyName) {
      this._firstName = firstName;
      this._familyName = familyName;
    }
  
    getFullName() {
      return `${this._firstName} ${this._familyName}`;
    }
  }
  
  class Group {
    constructor(manager /* : Employee */ ) { //Group object is composed of Manager object
      this._manager = manager;
      this._managedEmployees = [];
    }
  
    addEmployee(employee) {
      this._managedEmployees.push(employee);
    }
  }


  //decorators -decorator is simply a way of wrapping one piece of code with another
  //or called as functional composition, or higher-order functions.
  function doSomething(name) {
    console.log('Hello, ' + name);
  }
  
  function loggingDecorator(wrapped) {
    return function() {
      console.log('Starting');
      const result = wrapped.apply(this, arguments);
      console.log('Finished');
      return result;
    }
  }
  
  const wrapped = loggingDecorator(doSomething);
  wrapped('Graham');
// Starting
// Hello, Graham
// Finished


//class as expressions
const Circle = class {
    constructor() {
            this.radius = 20;
    }
}

//getOwnPropertyDescriptor
class AeroPlane {
    constructor(model, capacity) {
            this._model = model;
            this._capacity = capacity;
    }
    get model() {
            return this._model;
    }
    get capacity() {
            return this._capacity;
    }
    set model(model) {
            this._model = model;
    }
    set capacity(capacity) {
            this._capacity = capacity;
    }
}
const jet = new AeroPlane("Jet", 100);
console.log(jet.capacity);
// 100
console.log(Object.getOwnPropertyDescriptor(AeroPlane.prototype, "model"));
/*
{
    get: [Function: get model],
    set: [Function: set model],
    enumerable: false,
    configurable: true
}
*/

//Computed Method Names
const methodName = "getColor";
const propName = "color";
class AeroPlane {
constructor(color) {
                this._color = color
        }
        [methodName]() {
                return this._color;
        }
        get [propName]() {
                return this[`_${propName}`];
        }
        set [propName](value) {
                return this[`_${propName}`] = value;
        }
}
const whiteJet = new AeroPlane("white");
console.log(whiteJet.color);

//method overridding
class AeroPlane {
    constructor(capacity) {
            this.capacity = capacity;
    }
    showCapacity() {
            console.log(`Capacity of this plane: ${this.capacity}`);
    }
    fly() {
            console.log("Engines on, and the plane will take off soon");
    }
}
class FighterPlane extends AeroPlane {
    fly() {
            console.log("Engines on, and the plane is gone");
    }
    fire() {
            console.log("Loading weapons and firing");
    }
}
const phantom = new FighterPlane(2);
phantom.fly();
// Engines on, and the plane is gone
phantom.showCapacity();
// 2