//Function.prototype.call gives us a way to "borrow" a method from one object to use for another.
var palestrina = {
    work: "Missa Papae Marcelli",
    describe: function() {
        console.log(this.work);
    }
};

// Outputs: "Missa Papae Marcelli",
palestrina.describe();

var erasmus = {
    work: "Freedom of the Will"
};

// Outputs: "Freedom of the Will"
palestrina.describe.call(erasmus);

//object eramus has borrewed a function describe from palestrina object.


//Functional.prototype.Apply turns out that apply works in almost exactly the same way as call. The difference is that instead of a series of arguments, apply takes an array of values to use in its invocation.

function add (a, b) {
    return a + b;
}

// Outputs: 3
console.log(add.call(this, 1, 2));

// Outputs: 3
console.log(add.apply(this, [1, 2]));