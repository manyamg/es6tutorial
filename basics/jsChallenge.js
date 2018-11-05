var nums = [10, -12, 30, -1, -8, 0, 14, -33, 20]



function sumPlusMinus(nums) {
    return nums.reduce((acc, elem) => {
        return {
            plus: elem > 0 ? acc.plus + elem : acc.plus,
            minus: elem < 0 ? acc.minus + elem : acc.minus
        }
    }, {
        plus: 0,
        minus: 0
    })
}

console.log(sumPlusMinus(nums)) //{plus: 74, minus: -54}

function sum(...nums) {
    return nums.reduce((acc, elem) => acc + elem, 0)
}

sum(1, 3)
sum(10, 20, 5)
console.log(sum(2, 5, 80, 12, 50, 34))


const arr = [1, 2]
arr.push(3)
console.log(arr) //why no error is not generated, array are reference so u can add and delete

//arr = [1,2,3,4]  //assignment error , not allowed to reassign the value of arr

var i = 10
for (var i = 0; i < 5; i++) {

}
console.log(i); //before 5 //after 10

// var a = 5,
//     b = 10;


//     if(b > a) {
//         c = a + b + c 
//         let c = 2  // if var c  wil be hoisted to top of the program 
//         console.log(c) //uncaught referrence error
//     }

function multiply(a, mult = 2) {
    //   mult = mult !== undefined ? mult : 2 
    console.log(a * mult);
}

multiply(2) //4
multiply(2, undefined) //4
multiply(2, 0) //0
multiply(5, 10) //50

function missingArgument() {
    throw new Error("Function square requires an argument");
}

function square(a = missingArgument()) {
    console.log(a * a);
}

square(10) //10

//square() //100

let obj = {
    x: 5,
    y: 20,
    z: 3
}

function mult(object) {
    let {
        x,
        y,
        z
    } = object;
    return x * y * z;
}

console.log(mult(obj)); //300

var a = [1, 2, 3, [4, 5]]
var b
b = [...a] // b = a.slice();
// if b = a ; //copy of array, a and b are pointing in same place in memory

b.push("new Element")

console.log(a); // [1,2,3]
console.log(b); // [1,2,3,"new Element"]


var cars = [{
        brand: "Honda",
        price: 13000
    },
    {
        brand: "Rolls-royce",
        price: 120000
    }
]

//template strings
function carInfo(car) {
    return `Price of my new ${car.brand} \
is ${car.price}$ and it is \
${(car.price <= 2000) ? "cheap" : "expensive"} car`
}

cars.forEach(car => console.log(carInfo(car)))

//object destructing 
var person1 = {
    name: "Mike",
    info: {
      country: "Spain",
      age: 23
    },
    postsQuantity: 100
  };
  
  var person2 = {
    name: "Alice",
    info: {
      country: "Italy",
      age: 25
    }
  };

  function shortPerson(obj){
      var { 
          name: n,
          info: {country: c, age: a},
          postsQuantity: p=0
      } = obj;
      return {
          n: n,
          c: c,
          a: a,
          p: p
      }
  }

  console.log(shortPerson(person1));
  // {n: "Mike", c: "Spain", a: 23, p: 100}
  
  console.log(shortPerson(person2));
  // {n: "Alice", c: "Italy", a: 25, p: 0}


//string iteration
var vowelsCount = 0;
var vowels = ["a", "e", "i", "o", "u"];

var str = "Today is best day of my life";

// for (let i = 0; i < str.length; i++) {
//   if (vowels.includes(str[i])) vowelsCount++;
// }

for (let s of str) {
  if (vowels.includes(s)) vowelsCount++; // ES2016 (ES7) syntax
}

console.log(vowelsCount);

var a = "first"
var b = "secound"

[b,a] = [a,b] //swap values using destructing

// npm  2.8.1 2 major 8 minor 1 is patch ^ 8.1  can change ~8.1 only patch 1 version might be changed

const meta = {
    title: 'Destructuring Assignment',
    authors: [
      {
        firstname: 'Craig',
        lastname: 'Buckler'
      }
    ],
    publisher: {
      name: 'SitePoint',
      url: 'http://www.sitepoint.com/'
    }
  };
  
  const {
      title: doc,
      authors: [{ firstname: name }],
      publisher: { url: web }
    } = meta;

//return multiple values from function
function f() {
    return [1, 2, 3];
  }
  
  const [a, b, c] = f();
  
  // a = 1, b = 2, c = 3

  //for of desctructing 
  const books = [
    {
      title: 'Full Stack JavaScript',
      author: 'Colin Ihrig and Adam Bretz',
      url: 'http://www.sitepoint.com/store/full-stack-javascript-development-mean/'
    },
    {
      title: 'JavaScript: Novice to Ninja',
      author: 'Darren Jones',
      url: 'http://www.sitepoint.com/store/leaern-javascript-novice-to-ninja/'
    },
    {
      title: 'Jump Start CSS',
      author: 'Louis Lazaris',
      url: 'http://www.sitepoint.com/store/jump-start-css/'
    },
  ];


  for (const {title, author, url} of books) {
    console.log(title + ' by ' + author + ': ' + url);
  }
  

