//CalcArea.js
const circleArea = r => 3.14 * (r ** 2); 
 
const squareArea = s => s * s; 
 
export { circleArea, squareArea }; // {1} 

import { circleArea, squareArea } from './CalcArea'; // {2} 
 
console.log(circleArea(2)); 
console.log(squareArea(2)); 

//If we wanted to use the circleArea function, we could import only this function as well:

//import { circleArea } from './CalcArea'; 

//export { circleArea as circle, squareArea as square }; 
//In this case, the exported members need to be imported with the exposed name, not the name used internally, as follows:

//import { circle, square } from './17-CalcArea'; 

import * as area from './CalcArea'; 
 
console.log(area.circle(2)); 
console.log(area.square(2)); 


//export singe memeber of the js file  - use export default Book.js
export default class Book { 
    constructor(title) { 
      this.title = title; 
    } 
    printTitle() { 
      console.log(this.title); 
    } 
  } 

  //usage
  //import Book from './Book'; 
 
//const myBook = new Book('some title'); 
//myBook.printTitle(); 
//The name multiply in this case is local and will be used to refer to the default value imported from the module.
export let message = "42 is the answer to the everything.";
export default function(a, b) {
    return a * b;
}
import multiply, { message } from "./moduleFile.js";
console.log(multiply (21, 2));    // 42
console.log(message);             // "42 is the answer to the everything."


//RENAMING IDENTIFIERS
function sum(a, b) {
  return a + b;
}
export { sum as add };

import { add } from "./moduleFIle.js";