let myPromise =  new Promise((resolve, reject) => {
    resolve("my promise");
});

let myPromsie2 =  new Promise((resolve, reject) => {
    resolve("my promise2");
});

myPromise.then(result => console.log(result))
         .then(() =>  myPromsie2)
         .then((result) => console.log(result))