var prices = [1.1, 2.32, 3.68, 4.9];
var taxRate = 0.07;

const pricesWithTax = prices.map(price => price + price * taxRate);

//console.log(pricesWithTax);

const mapper = number => ({
  number: number,
  square: number * number,
  isEven: number % 2 === 0
});

console.log([1, 2, 3].map(mapper));

function setupApp() {
  this.version = 3;
  this.createdBy = "wes";

  var handler = () => {
    console.log(
      "hi, welcome to version:" +
        this.version +
        " hand crafted by" +
        this.createdBy
    );
  };

  //handler = handler.bind(this); with arrow you donn't need to do this.

  //document.addEventListener("click", handler);
}

//setupApp();

function computedTax(taxRate) {
  const [, ...price] = arguments;
  return price.map(p => p * taxRate);
}

//or

function computedTax(taxRate, ...price) {
  return price.map(p => p * taxRate);
}

taxValues1 = computedTax(0.07, 1.0, 2.0, 3.0);
console.log(taxValues1);

request({ url: "http://www.google.com", method: "GET" });

function request(request) {
  console.log(request.url);
  console.log(request.method);
}
requestNew({ url: "http://www.google.com", method: "GET" });
function requestNew({ url, method, body }) {
  console.log(url);
  console.log(method);
  console.log(body || "");
}

const person = {
  first: "WEs",
  last: "Higbee",
  address: {
    lines: ["100 bob lane", "apt 24"],
    city: "NY",
    state: "NY"
  }
};

const {
  address: {
    lines: [, line2]
  }
} = person;

console.log(line2);

const newNumbers = [1, 2, 3, 4];
const newNumbers1 = undefined;
const newNumbers2 = [1, 2, 3, undefined, 4];

function sum(numbers) {
  numbers = numbers || []; //case number 1
  let sum = 0;
  for (let index = 0; index < numbers.length; index++) {
    sum += numbers[index] || 0; //case number2
  }
  return sum;
}
//es6 sum
function sum1(numbers = []) {
  let sum = 0;
  //for (let index = 0; index < numbers.length; index++) {
  //  sum += numbers[index] || 0; //case number2
  //}

  for (const number of numbers) {
    sum += number || 0;
  }
  return sum;
}
function sumes6(numbers = []) {
  let sum = 0;
  for (const [, number = 0] of numbers.entries()) {
    sum += number;
  }
  return sum;
}

console.log(newNumbers);
console.log(newNumbers1); //0
console.log(newNumbers2);

const identity = newNumbers2.map(n => n);
console.log(identity);

const cleared = newNumbers2.map((n = 0) => n);
console.log(sum(cleared));

const orders = [
  { desc: "pencils", price: 1.5, quantity: 2 },
  { desc: "notepads", price: 1.5, quantity: 2 },
  { desc: "paperclips", price: 1.5 }
];

const costs = orders.map(({ price, quantity = 1 }) => price * quantity);
console.log(costs);

const areaOfRectangle = (width, height = width) => {
    return  width * height;
}

console.log(areaOfRectangle(5));
console.log(areaOfRectangle(5,4));