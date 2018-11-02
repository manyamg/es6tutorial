//shorthand, most common
const arr = []
const arr2 = [1,2,3]

//array length of 20 elements
const aLong = Array(20);

const arr = [1,2,3]
const  removeLast = arr.pop(); //remove  last 
const  removeFirst = arr.shift(); //remove  first 

const addLast = arr.push(11) //add element at the end

const addFirst = arr.unshift(1) // add element at first

const prices = [5,10, 20, 18]

const halfPrice = prices.map(price => price/2);

const nums = [1,2,3,4,5] 
const newNums = nums.map(n => n %2  === 0 ? n + 1: n ); // newNums [1,3,3,5,5] 

//copying arraying without mutating

const arr = [1,2,3,4,5]
const newArr = arr;

const arr = [1,2,3,4]
const newArr = arr.slice(2,4) // newArr is [3,4] and arr values are unchanged


// find the elements in array

const  arr = [ 1,2,3,4,5]

const firstLargerThan = arr.find( n => n > 3) //4 

const firstLargerIndex = arr.findIndex( n => n > 3) //3 

const largerThan = arr.filter( n => n > 3 );

//find element is present in an array 

const peoples = ['bob', 'jeff', 'tina', 'waldo', 'bill'];

const hasWaldo = peoples.includes('waldo');


//remove duplicates

const dupes = [1,1,2,2,3,3]

const uniqueSet = new Set(dupes); //set object

const uniqueArr = [...uniqueSet]; //back to array


//does every item fulfills in array

const ages =[24,30,45,56,67,21,19]

const everyOneOldEnough = ages.every(age => age >= 18) ;


//does some of items in array fullfill items
const group = [16,42,14,28]
const oldEnough = group.some(age => age >= 18) //true


// populate an array of emoptiness

const emptyArr = Array(5);
emptyArr.fill(0) //[0,0,0,0,0,]


//arrays sort 

const arr = [10,5,3,11]
arr.sort((a,b) => a -b ) // asending order

arr.sort((a,b) => b - a) //descending order


//flatten array 

const mess = [1,2, [3,4,[5,6]]]

const flat1 = mess.flat()  //[1,2,3,4,[5,6]]]

const flast2 = mess.flat(2) //[1,2,3,4,5,6])

// array in loops 

const arr = ['a', 'b', 'c'];

arr.forEach((val,index, array) => {
console.log(val,index) // a, 0, b,1, c,2 
})


for(const [index, val] of arr.entries()) {
console.log(val, index)
}

for(const key in arr) {
    console.log(key) //0,1,2
}

for(const value of arr) {
    console.log(value) //a,b,c 
}


//avoid // typically arrayLike is arguments var arr = [].slice.call(arrayLike); use Array.from(arrvalues, arrMapper)
function double(arr) {
    return Array.from(arguments, function(elem) {
      return elem * 2;
    });
  }
  
  const result = double(1, 2, 3, 4);
  
  // prints [2, 4, 6, 8]
  console.log(result);

  //array find 
  const arr = [1, 2, 3, 4];
const result = arr.find(function(elem) { return elem > 2; });

// prints "3" because it’s the first
// element greater than 2
console.log(result);

//findIndex example
const arr = [1, 2, 3, 4];
const result = arr.findIndex(function(elem) {return elem > 2;});

// prints "2" because is the index of the
// first element greater than 2
console.log(result);


//Array.prototype.keys() returns iterator
const arr = [1, 2, 3, 4];
const iterator = arr.keys();

// prints "0, 1, 2, 3", one at a time, because the
// array contains four elements and these are their indexes
let index = iterator.next();
while(!index.done) {
  console.log(index.value);
  index = iterator.next();
}


const arr = new Array(6);
// This statement fills positions from 0 to 2
arr.fill(1, 0, 3);
// This statement fills positions from 3 up to the end of the array
arr.fill(2, 3);

// prints [1, 1, 1, 2, 2, 2]
console.log(arr);