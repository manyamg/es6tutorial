const message  = 'Hello'

const greet = message + 'world' //Hello world

const str = String('constructor')

let str = 'abc'

str[0] ='A'
console.log(str) // 'abc'

str ='def'
console.log(str) //def

const str ='Some cool sentence, yeah'

const words = str.split(' ') //Array ['some', 'cool', 'sentence', 'yeah']

const username = ' Bob '
const u2 = '         user2'
const u3 = 'user3      '

username.trim() //'Bob'

u2.trimStart() // 'user2'
u3.trimStart() // 'user3'


const m1 = 'This pizza is great'

m1.includes('swag') //false
m1.includes('pizza') //true

const msg = 'I Just bought some new swag!'

msg.replace('swag', 'cool stuff')

const phrase = 'Erroe'

const re = (phrase + ' ').repeat(3) + '*explodes*'


const str = 'aAbBcC'

str.split('').sort() //['A','B','C','a','b','c']

//String constructor property
var uname = new String("Hello World") 
console.log(uname) 
console.log("Length "+uname.length)  


// String prototype - allows you to add a property to object.
function employee(id, name) { 
   this.id = id; 
   this.name = name; 
} 
var emp = new employee(123, "Smith"); 
employee.prototype.email = "smith@abc.com"; 

console.log("Employee 's Id: " + emp.id); 
console.log("Employee's name: " + emp.name);
console.log("Employee's Email ID: " + emp.email);


var str = new String("This is string"); 
console.log("str.charAt(0) is:" + str.charAt(0));  //str.charAt(0) is:T 
console.log("str.charAt(1) is:" + str.charAt(1));  //str.charAt(1) is:h 

//String concat

var str1 = new String( "This is string one" ); 
var str2 = new String( "This is string two" ); 
var str3 = str1.concat( str2 ); 
console.log("str1 + str2 : "+str3) //str1 + str2 : This is string oneThis is string two 


//string replace
var re = /apples/gi; 
var str = "Apples are round, and apples are juicy."; 
var newstr = str.replace(re, "oranges"); 
console.log(newstr)    //oranges are round, and oranges are juicy.    


//string search 
var re = /apples/gi;
var str = "Apples are round, and apples are juicy."; 
if ( str.search(re) == -1 ) { 
   console.log("Does not contain Apples" ); 
} else { 
   console.log("Contains Apples" ); 
}  //Contains Apples.     


//substring 
var str = "Apples are round, and apples are juicy."; 
console.log("(1,2): "    + str.substring(1,2)); //p
console.log("(0,10): "   + str.substring(0, 10));  //Apples are
console.log("(5): "      + str.substring(5));  //s are round, and apples are juicy  

  var str = new String("Hello world"); 
console.log(str.valueOf( ));  //e primitive value of a String object. and value as Hello world
