function* oneToThree(){
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