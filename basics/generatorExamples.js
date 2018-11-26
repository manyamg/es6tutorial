function* oneToThree(){
//import function from './moduleExample';
    yield 1;
    yield 2;
    yield 3;
}

const generator = oneToThree();
console.log(generator);
console.log(generator.next());
generator.next()

//const numbers = [1,2,3,4,5,6,7,8,9];

function postiveNumbersUpTo(stop)
{
    const iterable = {
        [Symbol.iterator]() {
            let current = 1
            return {
                next() {
                    if(stop < current) {
                        return {done: true};
                    }
                 return {done: false, value: current++};
                }
            }
        }
    }
    return iterable;
}

const[...numbers] = postiveNumbersUpTo(9);
console.log(numbers);

//generator function implements iterator on the background and only focus on the return values. 
function* postiveNumbersUpToUsingGenerator(stop) 
{
  let current = 1
  while(current <= stop) {
    yield current++;
  }
}
const[...numbers1] = postiveNumbersUpToUsingGenerator(9);
console.log(numbers1);

function* PersonQuery() {
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

    yield wes;
    yield pax;
    yield jonathan;
}

//manual iteration
const query = (PersonQuery())[Symbol.iterator]();
console.log(query.next());
console.log(query.next());
console.log(query.next());

for (const person of PersonQuery()) {
    console.log(person);  
}

function* daysForward(days){
    for(let count =0 ; count < days; count++){
        let day = new Date();
        day.setDate(day.getDate() + count);
        const skip = yield day; //skip as value as 5
        count += skip || 0
    }
}

const days = daysForward(15);

console.log(days.next());
console.log(days.next(5));
console.log(days.next());
console.log(days.next(3));


function *generatorFunction(i) {
    console.log(i);
    const j = 5 * (yield(i *10));
    console.log(j);
    const k = yield (2*j/4);
    console.log(k);
    return i + j + k; 
}

var generator = generatorFunction();
console.log(generator.next(20)); //{value: 100, done: false}
console.log(generator.next(10)); //{value: 25, done: false}
console.log(generator.next(5));  //{value: 65, done: true}

/*When we call the first next(20), every line of code till the first yield is printed. As we do not have any previous yield expression this value 20 is discarded. 
In the output we get yield value as i*10, which is 100 here. Also the state of the execution stops with first yield and the const j is not yet set.
The second next(10) call, replaces the entire first yield expression with 10, imagine yield (i * 10) = 10, which goes on to set the value of const j to 50
 before returning the second yield’s value. The yield value here is 2 * 50 / 4 = 25.
Third next(5), replaces the entire second yield with 5, bringing the value of k to 5. And further continues to execute return statement and return (x + y + z) => (10 + 50 + 5) = 65 as the final yield value along with done true.*/


//Passing Yield as an Argument of a Function

function *generatorFunction1()
{
    yield //pause here and returns undefined
    foo(yield "i am use less");
}

function foo(x) {
    console.log("just printing the argument passed" + x);
}

let gen1 = generatorFunction1();
console.log(gen1.next()); //prints undefined
console.log(gen1.next()); // prints // I am use less
console.log(gen1.next()); //calls foo and completed the run


//Yield with function call
function *fetchUser() {
    const use = yield getData();
   console.log(use);
}

function getData() {
    return {name: 'rajesh', dob: '1991'};
}

var fetchGen = fetchUser();
console.log(fetchGen.next().value); // contais getData value
console.log(fetchGen.next()); //finishes execution


//Yield with promises

function * fetchUser(action) {
    const user = yield apicCall();
}

function apicCall() {
    return  new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({name: "Girish", dob: '1980'})
        }, 2000);
    });
}

var fetchGen = fetchUser();
console.log(fetchGen.next().value).then(n => console.log(n));

//yield*    yeilding onther yield
