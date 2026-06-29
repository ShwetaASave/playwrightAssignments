// Goal: store PI and later update it to 3.14
// const PI = 3.14159;
// PI = 3.14;
// console.log(PI);

// let x = 1;
// let x = 2;
// console.log(x); // Output: SyntaxError: Identifier 'x' has already been declared

var y = 1;
var y = 2;
console.log(y); // Output: 2

// const a;
// a = 10;
// console.log(a); // Output: SyntaxError: Missing initializer in const declaration

console.log(typeof 5n); 

// const count = 0;
// count = count + 1;  
// console.log(count); // Output: TypeError: Assignment to constant variable.


console.log(Number.isFinite("10"));
console.log(Number.isFinite(10));

console.log(10n / 3n);

console.log(Boolean("false"));

const value = [];
if (Array.isArray(value)) {
  console.log("array");
}
