// function step1(callback) {
//     setTimeout(function() {
//     console.log("Step 1 done after 3 secounds");
//     }, 3000);
// }

// function step2(callback){
//     setTimeout(function(){
//    console.log("Step  2 done after  2 secounds");
//     callback()
//     },2000 );
// }

// function step3(callback){
//     setTimeout(function() {
//         console.log("Step 3 done after 1 secounds")
//     }, 1000);
// }

//A promise can be resolved or rejected. 
//Until it is resolved or rejected it stays in pending state.
let promise = new Promise((resolve, reject) => {
///* asynchronous code execution is successful */
 if(true ) {
  resolve(/* result */);
 } else {
  reject(/* error */);
 }
});


//call promise
promise.then((result) => {
    console.log(result);
   },
   (error) => {
    console.log(error);
   });

 // you could handle the errors by passing it in .catch instead of .then as well
   promise.catch((error) => { console.log(error); });

//example
var promise1 = new Promise(function(resolve, reject) {
    setTimeout(function() { 
      resolve('foo');
    }, 300);
  });
  
  promise1.then(function(value) { 
    console.log(value);
    // expected output: "foo"
  });

//promise all 
var promise1 = Promise.resolve(3);
var promise2 = 42;
var promise3 = new Promise(function(resolve, reject) {
  setTimeout(resolve, 100, 'foo');
});

Promise.all([promise1, promise2, promise3]).then(function(values) {
  console.log(values);
});


//promise race
var promise1 = new Promise(function(resolve, reject) {
    setTimeout(resolve, 500, 'one');
});

var promise2 = new Promise(function(resolve, reject) {
    setTimeout(resolve, 100, 'two');
});

Promise.race([promise1, promise2]).then(function(value) {
  console.log(value);
  // Both resolve, but promise2 is faster
});
// expected output: "two"


//real exmample
/**let isLoading = true;

fetch(myRequest).then(function(response) {
    var contentType = response.headers.get("content-type");
    if(contentType && contentType.includes("application/json")) {
      return response.json();
    }
    throw new TypeError("Oops, we haven't got JSON!");
  })
  //.then(function(json) { /* process your JSON further */ //})
  //.catch(function(error) { console.log(error); })
 // .finally(function() { isLoading = false; }); **/


function step1() {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            console.log("Step 1 done After 3 seconds");
            resolve();
        }, 3000);
    });
}

function step2() {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            console.log("Step 2 done After 2 seconds");
            resolve();
        }, 2000);
    });
}

function step3() {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            console.log("Step 3 done After 1 seconds");
            resolve();
        }, 1000);
    });
}

step1()
.then(result => step2(result))
.then(result2 => step3(result2));

// function run(){
//     step1(function(){
//         step2(function() {
//            step3();
//         });
//     });
// }

// run();


// promide finally 
//Promise.finally()
//A Promise chain can either succeed and reach the final .then() or fail and trigger a .catch() block. In some cases, you want to run the same code regardless of the outcome — for example, to clean up, remove a dialog, close a database connection etc.

//The .finally() prototype allows you to specify final logic in one place rather than duplicating it within the last .then() and .catch():

function doSomething() {
  doSomething1()
  .then(doSomething2)
  .then(doSomething3)
  .catch(err => {
    console.log(err);
  })
  .finally(() => {
    // finish here!
  });
}