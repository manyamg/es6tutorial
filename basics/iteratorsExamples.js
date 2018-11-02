// an array, which is an iterable, and the iterator it can produce to consume its values:
var arr = [1,2,3];

//iterator format
myIterator[Symbol.iterator] = function () {
    return {
     next: function () {}
   }
 }
 
var it = arr[Symbol.iterator]();



it.next();      // { value: 1, done: false }
it.next();      // { value: 2, done: false }
it.next();      // { value: 3, done: false }

it.next();      // { value: undefined, done: true }

//Primitive string values are also iterables by default:

var greeting = "hello world";

var it = greeting[Symbol.iterator]();

it.next();      // { value: "h", done: false }
it.next();      // { value: "e", done: false }


//map also iterators
var m = new Map();
m.set( "foo", 42 );
m.set( { cool: true }, "hello world" );

var it1 = m[Symbol.iterator]();
var it2 = m.entries();

it1.next();     // { value: [ "foo", 42 ], done: false }
it2.next();     // { value: [ "foo", 42 ], done: false }

//return(..) is defined as sending a signal to an iterator that the consuming code is complete and will not be pulling any more values from it.


const orders = [{
        desc: "pencils",
        price: 1.5,
        quantity: 2
    },
    {
        desc: "notepads",
        price: 1.5,
        quantity: 2
    },
    {
        desc: "paperclips",
        price: 1.5
    }
];
sum = 0
for (const order of orders) {
    const quantity = order.quantity || 1;
    sum += order.price * quantity
}


function PersonQuery() {
    const wes = {
        first: "Wes",
        last: "Higbee"
    };
    const pax = {
        first: "Pac",
        last: "Higbee"
    };
    const jonathan = {
        first: "Jonathan",
        last: "Higbee"
    };

    //  let theNextRecord = wes;
    //   this.nextRecord = function() {
    //       switch(theNextRecord) {
    //           case wes:
    //           theNextRecord = pax;
    //           return wes;
    //           case pax:
    //           theNextRecord = jonathan;
    //           return pax;
    //           case jonathan:
    //           theNextRecord = wes;
    //           return jonathan;
    //       }
    //    return theNextRecord;
    //   }
    createIterator = function () {
        let theNextRecord = wes;

        function next() {
            switch (theNextRecord) {
                case wes:
                    theNextRecord = pax;
                    return {
                        value: wes,
                        done: false
                    };
                case pax:
                    theNextRecord = jonathan;
                    return {
                        value: pax,
                        done: false
                    };
                case jonathan:
                    theNextRecord = undefined;
                    return {
                        value: jonathan,
                        done: false
                    };
            }
            return {
                done: true
            };
        }

        return {
            next: next
        }
    }

    this[Symbol.iterator] = createIterator;

}

//   const query = new PersonQuery(); //query is iterable , thenextRecord is iterator which keeps of record
//   console.log(query.nextRecord());
//   console.log(query.nextRecord());
//   console.log(query.nextRecord());


const query = (new PersonQuery())[Symbol.iterator]();
console.log(query.next());
console.log(query.next());
console.log(query.next());
console.log(query.next());

//using for of
for (const record of new PersonQuery()) {
    console.log(record);
}

//retrieve using spread operatpr destructing 
const [firstRecord, ...rest] = new PersonQuery();
console.log(firstRecord);
console.log(rest);

const number1 = [1,2,3];
const number2 =[4,5,6,7]
const combined =[...number1, ...number2, ...new PersonQuery()]
console.log(combined);


var nums = {
    a: 10,
    b: 20,
    c: "string",
    d: 12
}

function sumObjectValues(object){
    var total = 0;
    for (const k in object) { // to iterate keys of the object
        if (typeof object[k] === "number" && object.hasOwnProperty(k)) {
             total += object[k];       
        }
    }
   return total;
}

Object.prototype.new = 500 //returns 542 else  if object.hasOwnProperty(k) not checked, adding this property to gobal object

console.log(sumObjectValues(nums))


//more examples
const infiniteSequenceGenerator = {
    currentNumber: 0,
    // making the "infiniteSequenceGenerator" iterator an iterable
    [Symbol.iterator]() {
            return this;
    },
    next() {
            return {
                    value: this.currentNumber++,
                    done: false
            }
    }
};
const iter = infiniteSequenceGenerator[Symbol.iterator]();
console.log(iter === infiniteSequenceGenerator);   // true
console.log(iter.next().value);   // 0
console.log(iter.next().value);   // 1
console.log(iter.next().value);   // 2
console.log(iter.next().value);   // 3
for (let item of iter) {
if (item > 20) break;
console.log( item );
}
// 4
// 5
// 6
// 7
// ... 20


//Generators -In simple words, Generators are functions that can be paused
//With ES6, a different kind of function has been introduced to us through generators that do not always run to completion like functions,
// but they can pause and resume cycle midway through executions.
//A generator is a function that allows us to create a special type of iterator

function *gen() {
    yield 42;
}

//In this syntax, the position of the ‘*’ is not very significant. A generator can be written in any of the following ways:
function *gen()  {  }
function* gen()  {  }
function * gen() {  }
function*gen()   {  }

function *gen() {
    yield "Hello";
    yield "from";
    yield "generator";
}

let obj = gen();

//The method obj.next() continues the execution of gen, until the next yield expression:

console.log(obj.next());   // { value: "Hello", done: false}
console.log(obj.next());   // { value: "from", done: false}
console.log(obj.next());   // { value: "generator", done: false}
console.log(obj.next());   // { value: undefined, done: true}

//Communicating with Generators
//We can also pass a value via yield to the generator function and use those values inside the generator function when the execution resumes    

function *calculator() {
    const num1 = yield "I am a calculator";
    const num2 = yield "I add numbers";
    console.log(`Sum is: ${num1 + num2}`);
}
const myGenerator = calculator();
console.log(myGenerator.next());
// { value: 'I am a calculator', done: false }
console.log(myGenerator.next(2));
// { value: 'I add numbers', done: false }
console.log(myGenerator.next(3));
// Sum is: 5
// { value: undefined, done: true }

//In the above example, the first time next() was called, the generator yields the "I am a calculator" string and pauses.
 //The second time the value from the next(2) will be assigned to num1, because inside the generator,
  //we specified that whatever value is yielded at yield "I am a calculator" gets assigned to num1, and similarly for num2.
   //Hence, the third time next() was called, Sum is: 5 was printed to the console and since there was no more yield statements, 
  // undefined was returned as the value

 // iterators having two optional methods : return(...) and throw(...),

 function *getFruits() {
    yield "apple";
    yield "orange";
    yield "banana";
}

const fruitIterator = getFruits();
console.log(fruitIterator.next());           // {value: 'apple', done: false}
console.log(fruitIterator.return("kiwi"));  // {value: 'kiwi', done: true} //Kiwi is equivalent to having a return value in the generator function, 
console.log(fruitIterator.next());           // {value: undefined, done: true}

function *getFruits() {
    yield "apple";
    yield "orange";
    yield "banana";
    return "kiwi";
    yield "watermelon";
}
const fruitIterator = getFruits();
for (let fruit of fruitIterator) {
    console.log(fruit);
}
// apple
// orange
// banana

// with throw
function *getFruits() {
    yield "apple";
    yield "orange";
    yield "spinach";
    yield "watermelon"
}
const fruitIterator = getFruits();
for (let fruit of fruitIterator) {
    try {
      console.log(fruit);
      if (fruit === "spinach") {
            fruitIterator.throw("Vegetable Found");
      }
  }
  catch (err) {
      console.log(`Exception: ${err}`);
  }
}
// apple
// orange
// spinach
// Exception: Vegetable Found
