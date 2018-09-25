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

//Object equality example 
var jangoFett = {
    occupation: "Bounty Hunter",
    genetics: "superb"
};

var bobaFett = {
    occupation: "Bounty Hunter",
    genetics: "superb"
};

var callMeJango = jangoFett; // both are having same values and instances

// Outputs: false
console.log(bobaFett === jangoFett); //different instances

// Outputs: true
console.log(callMeJango === jangoFett);


//Object.free example 
var artist = {
    name: "Johnny Cash",
    latestAlbum: "American V"
};

function announce (artist) {
    // Whoops! Assigning the name rather than testing equality!
    if (artist.name = "Elvis Presley") {
        console.log("The King");
    } else {
        console.log(artist.name);
    }
}

Object.freeze(artist); 

// Outputs: "The King"
announce(artist);

// Outputs: {
//     name: "Johnny Cash",
//     latestAlbum: "American V"
// }

//without Object.freeze statement, output is changed

// Outputs: {
//     name: "Elvis Presley",
//     latestAlbum: "American V"
// }
console.log(artist);

//check object is freezed or not 
// Outputs: "Frozen Artist!"
if (Object.isFrozen(artist)) {
    console.log("Frozen artist!");
}