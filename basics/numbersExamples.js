// prints 'true'
console.log(Number.isInteger(19));

// prints 'false'
console.log(Number.isInteger(3.5));

// prints 'false'
console.log(Number.isInteger([1, 2, 3]));

// prints 'true'
console.log(Number.isNaN(0/0));

// prints 'true'
console.log(Number.isNaN(NaN));

// prints 'false'
console.log(Number.isNaN(undefined));

// prints 'false'
console.log(Number.isNaN({prop: 'value'}));

// Prints '-3'
console.log(Number.parseInt('-3'));

// Prints '4'
console.log(Number.parseInt('100', 2));

// Prints 'NaN'
console.log(Number.parseInt('test'));

// Prints 'NaN'
console.log(Number.parseInt({}));

// Prints '42.1'
console.log(Number.parseFloat('42.1'));

// Prints 'NaN'
console.log(Number.parseFloat('test'));

// Prints 'NaN'
console.log(Number.parseFloat({}));