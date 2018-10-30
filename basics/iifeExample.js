var a =(()=> {
 function fn1() {}
 function fn2() {}

 return {
     fn1,
     fn2
 }
})();

//a.fn1();

var greeting =(()=> {
    var greetingString = "Hey, that's" //its a closure 
    function greet(name) {
        return `${greetingString} ${name}`
    }

    function changeGreeting(newGreeting) {
     greetingString =  newGreeting
    }
    return {
        greet,
        greetingString  
    }
   })();



//usage : greeting.greet()

console.log(greeting.greet("Bob"));
console.log(greeting.changeGreeting("Good Morning"));
console.log(greeting.greet("Emily"));