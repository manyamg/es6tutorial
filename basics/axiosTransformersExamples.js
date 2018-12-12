const axios = require('axios');
let axiosConfig  =  { timeout: 10000, baseURL: "http://jsonplaceholder.typicode.com"};
axiosConfig.transformResponse =[(data) => {
    const jsonResponse = JSON.parse(data)
    const result = []
    jsonResponse.forEach(function (element) {
        result.push({status : element.completed, primaryId: element.id})
    })

    return result
}];

axios.get("/todos", axiosConfig).then(function (response) {
    console.log(response.data);
});