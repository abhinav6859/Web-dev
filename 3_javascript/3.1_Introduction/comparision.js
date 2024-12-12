// Illustration of (==) operator
let x = 5;
let y = '5';

// Checking of operands
console.log(x == 5);
console.log(y == 5);        
console.log(x == y);

console.log();

// Check against special values
console.log(NaN == NaN);
console.log(0 == false);   
console.log(0 == null);


console.log("Illustration of (!=) operator");

// Illustration of (!=) operator
let x1 = 5;
let y1 = '5';

// Checking of operands
console.log(x1 != 6);
console.log(y1 != '5');        
console.log(x1 != y1);

console.log();

// Check against special values
console.log(0 != false);   
console.log(0 != null);
console.log(NaN != NaN);

console.log("Illustration of (===) operator");

// Illustration of (===) operator
let x2 = 5;
let y2 = '5';

// Checking of operands
console.log(x2 === 6);
console.log(y2 === '5');        
console.log(x2 === y2);

console.log();

// Check against special values
console.log(NaN === NaN);   
console.log(0 === false);   
console.log(0 === null);