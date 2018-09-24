// ReferenceError: noSuchVariable is not defined
//console.log(noSuchVariable);

// Outputs: undefined
console.log(declaredLater);

var declaredLater = "Now it's defined!";

// Outputs: "Now it's defined!"
console.log(declaredLater);


var declaredLater;

// Outputs: undefined
console.log(declaredLater);

declaredLater = "Now it's defined!";

// Outputs: "Now it's defined!"
console.log(declaredLater);


var name = "Baggins";

(function () {
    // Outputs: "Original name was undefined"
    console.log("Original name was " + name);

    var name = "Underhill";

    // Outputs: "New name is Underhill"
    console.log("New name is " + name);
})();

//In cases like this, the developer probably expected name to retain its value from the outer scope
// until the point that name was declared in the inner scope. But due to hoisting, name is undefined instead.


//You might be wondering what happens if you use a named function expression.

// ReferenceError: funcName is not defined
//funcName();

// TypeError: undefined is not a function
//varName();

var varName = function funcName() {
    console.log("Definition not hoisted!");
};




