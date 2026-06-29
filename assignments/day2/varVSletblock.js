//console.log("Value of A " + a); // Output: undefined
//console.log("Value of B " + b); // Output: ReferenceError: Cannot access 'b' before initialization
var a = 1;
let b = 2;
console.log(a); // Output: 1
console.log(b); // Output: 2

const c = 3;
console.log(c); // Output: 3

const name = "Shweta";
console.log(name); // Output: Shweta

const user = {
    name: "Shweta Raut",
    age: 30
};
user.name = "Shweta Save";
console.log(user); // Output: { name: 'Shweta Save', age: 30 }  

user = {name: "Shweta Raut", age: 30}; // Output: TypeError: Assignment to constant variable. 
   