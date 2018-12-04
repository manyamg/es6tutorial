/**
 * Created by manyamg on 03/12/2018.
 */
import axios from 'axios';

axios.defaults.baseURL = "http://jsonplaceholder.typicode.com"

// axios.defaults.headers.get['X-CUSTOM-HEADER'];// set the headers for get method only
// axios.defaults.headers.post['X-CUSTOM-HEADER'];// set the headers for post method only
// axios.defaults.headers.common['X-CUSTOM-HEADER'];// set the headers for all method only
const instance = axios.create();

//var promise = axios(); returns a promise

//factory method
// const instance = axios.create({
//     baseURL: 'https://some-domain.com/api/',
//     timeout: 1000,
//     headers: {'X-Custom-Header': 'foobar'},
//     auth: {
      //username: 'Aladdin',
    //password: 'open sesame'  // header Authorization  to 'Basic QWxhZGRpbjpvcGVuIHNlc2FtZQ==')
//}
// });


instance.get("/todos").then(function (response) { // promised based http request
    console.log(response);
    console.log(response.data[0].userId);
    console.log(response.status)
    console.log(response.statusText)
    console.log(JSON.stringify(response.headers))
    console.log(response.config.url);
    console.log(response.headers['content-type']) // particular header
})

//using request config object
axios('/todos', {
    baseURL: 'http://jsonplaceholder.typicode.com'
});


//request using query params http://jsonplaceholder.typicode.com/todos?id=1'
axios.get('http://jsonplaceholder.typicode.com/todos', {
    params: {
        id: 1
    }
}).then(function(response){console.log(response);});


// http post example
axios.post('http://jsonplaceholder.typicode.com/todos', {
    userId: '1',
    title: "todoTitle",
    completed: false
})
    .then(function (response) {
        console.log(response);
    })

// api.js calling from other module
//import axios from 'axios';
// export default axios.create({
//     baseURL: 'http://jsonplaceholder.typicode.com/'
// });

//import API from '../api';
// API.delete('users/1')


//using Async await
const axios = require('axios');

// async function getGithubData() {
//     let res = await axios.get('https://api.github.com/users/manyamg');
//     console.log(res.data.login);
// }
//
// getGithubData();

//calling api in sequence and spread the response using axios.spread
axios.all([
    axios.get('http://jsonplaceholder.typicode.com/todos'),
    axios.delete('https://jsonplaceholder.typicode.com/posts/1')
])
    .then(axios.spread(function (userResponse, reposResponse) {
        console.log(userResponse.data);
        console.log(reposResponse.data);
    }))


//using Promise.all
Promise.all([
    axios.get('http://jsonplaceholder.typicode.com/todos'),
    axios.delete('https://jsonplaceholder.typicode.com/posts/1')
])
    .then((function([userResponse, reposResponse]) {
        console.log(userResponse.data);
        console.log(reposResponse.data);
    }))
