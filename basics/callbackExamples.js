//function passing as parameter
//a callback is a piece of executable code that is passed as an argument to other code, which is expected to call back (execute) the argument at some convenient time.
//callback is function composition.
var triple = function(x){
	return x * 3 ;
}

var waffle = triple

waffle(3);


let x = function(){
	console.log("I am caled from inside a function");
}

let y = function(callback){
	console.log('do something');
	callback();
}

y(x)

//why call back

let calc = function(num1, num2, calcType) {
	if(calcType === "add") {
	return num1 + num2 ;
	} else if(calcType  === "multiply") {
	return num1 * num2 ;
	}
};

console.log(calc(2,3, 'add'));

//lets change calc function using callback

let add = function(a, b) {
	return a + b;
}

let multiply = function(a,b) {
	return a * b;
}

let calc = function(num1, num2, callback){
	return callback(num1, num2);
}

console.log(calc(2,3, multiply))

//if the callback is used only once.
 console.log(calc(2,3, function(a,b) {
	return a+b ;
}))

//validaton for callback 
let calc = function(num1, num2, callback){
 if(typeof callback === 'function'){
   return callback(num1, num2);
 }	
}

//multiple callbacks
function functionTwo(var1, var2, callback1, callback2) {
    callback1(var1);	
    callback2(var2);	
}

functionTwo(1, 2, function (x) { alert(x); }, function (x) { alert(x); })


//few more example from legacy to callbacks
var animals =[
{ name: 'Fluffykins', spicies: 'rabbit'},
{name: 'Caro', spicies: 'dog'},
{name: 'Hamilton', spicies: 'dog'},
{name: 'Harold', spicies: 'fish'},
{name: 'Ursula', spicies: 'cat'},
{name: 'jimmy', spicies: 'fish'}]

//legacy way
var dogs =[]
for(var i = 0; i < animals.length ; i ++) {
	if(animals[i].species === 'dog') {
	dogs.push(animals[i]);
	}
}

//with call backs

var dogs = animals.filter(function(animal){
	return animal.species === 'dog';
});

//extract callback
var isDog = function(animal){
	return animal.species === 'dog';
}

var dogs = animals.filter(isDog);
var otherAnimals = animals.reject(isDog);

//Realtime examples:
var myArr = [
{
num:5,
str: 'apple'
},
{
num:7,
str: 'cabbage'
},
{ num:1,
str: 'banana'
}]

myArr.sort(function(val,va2){
	if(val1.str > var2.str){
	return -1;
	} else {
	return 1;
	}
});

console.log(myArr);




