var bool = new Boolean( );
console.log("bool.constructor() is : " + bool.constructor) //bool.constructor() is : function Boolean() { [native code] }


function logTruthiness (val) {
    if (val) {
        console.log("Truthy!");
    } else {
        console.log("Falsy.");
    }
}

// true conditions
// Outputs: "Truthy!"
logTruthiness(true);

// Outputs: "Truthy!"
logTruthiness({});

// Outputs: "Truthy!"
logTruthiness([]);

// Outputs: "Truthy!"
logTruthiness("some string");

// Outputs: "Truthy!"
logTruthiness(3.14);

// Outputs: "Truthy!"
logTruthiness(new Date());
//===================================//
//Falsy conditions
// Outputs: "Falsy."
logTruthiness(false);

// Outputs: "Falsy."
logTruthiness(null);

// Outputs: "Falsy."
logTruthiness(undefined);

// Outputs: "Falsy."
logTruthiness(NaN);

// Outputs: "Falsy."
logTruthiness(0);

// Outputs: "Falsy."
logTruthiness("");


//More examples
function reportAttitude (person) {
    if (person.skepticism) {
        console.log(person.name +
                    " is skeptical about " +
                    person.skepticism);
    } else {
        console.log(person.name + " wants to believe.");
    }
}

var mulder = {
    name: "Fox Mulder"
};

var scully = {
    name: "Dana Scully",
    skepticism: "UFOs & conspiracy theories"
};

var frohikey = {
    name: "Melvin Frohikey",
    skepticism: ""
};

// Outputs: "Fox Mulder wants to believe."
reportAttitude(mulder);

// Outputs: "Dana Scully is skeptical about UFOs and conspiracy theories."
reportAttitude(scully);

// Outputs: "Melvin Frohikey wants to believe."
reportAttitude(frohikey);