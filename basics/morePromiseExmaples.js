const fetch = require('node-fetch');

const museumsDataUrl = "./museums.json"
console.log(museumsDataUrl);

fetch(museumsDataUrl)
.then( response =>  response.json())
.then(museums => console.log(museums))
.catch(error => new Error("unable to load the json file"));

// function* program() {
// const requestPromise = fetch((museumsDataUrl));
// const response = yield requestPromise
// const parsePromise = response.json();
// const museums = yield parsePromise;
// console.log(museums);
// }

function* program() {
    const response = yield fetch((museumsDataUrl));
    const museums = yield response.json();
    console.log(museums);
    }

    //error handler use try catch or async(program).catch()

async(program); // So when I yield this requestPromise here, that promise is sent off to this async control flow function, and when a response comes back, 
//it takes care of sending it back, which is the result of this yield 

