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
