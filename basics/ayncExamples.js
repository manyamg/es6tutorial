//fetch api using promise
fetch('https://www.reddit.com/r/javascript/top/.json?limit=5')
.then(res => res.json())
.then(json => console.log(json));

//await
async function fetchTopFive(sub) {
    const URL = `https://www.reddit.com/r/${sub}/top/.json?limit=5`;
    const fetchResult = fetch(URL)
    const response = await fetchResult;
    const jsonData = await response.json();
    console.log(jsonData);
  }
  
  fetchTopFive('javascript');

  //to handle errors
  async function fetchTopFive(sub) {
    const URL = `http://httpstat.us/404`; // Will return a 404
    const fetchResult = fetch(URL)
    const response = await fetchResult;
    if (response.ok) {
      const jsonData = await response.json();
      console.log(jsonData);
    } else {
      throw Error(response.statusText);
    }
  }
  
  fetchTopFive('javascript');

  //fetch using request Object 
  async function fetchTopFive(sub) {
    const URL = `https://www.reddit.com/r/${sub}/top/.json?limit=5`;
    try {
      const fetchResult = fetch(
        new Request(URL, { method: 'GET', cache: 'reload' })
      );
      const response = await fetchResult;
      const jsonData = await response.json();
      console.log(jsonData);
    } catch(e){
      throw Error(e);
    }
  }
  
  fetchTopFive('javascript');

  //pass the headers
  const headers = new Headers();
headers.append('Accept', 'application/json');
const request = new Request(URL, { method: 'GET', cache: 'reload', headers: headers });

//sample for POST
const postReq = new Request(request, { method: 'POST' });