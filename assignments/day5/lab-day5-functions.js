//Assisment 1
greet()
function greet() { 
    console.log("Hello, Shweta!");
}

const double = function(x) {
    return x * 2;
}   
console.log(double(5));
// ReferenceError got as Cannot access 'double' before initialization

//Assisment 2
function power(base, exp = 2) {
    return base ** exp;
}
console.log(power(3));     
console.log(power(2, 5));

function sum(...nums) {
    let total = 0;

    for (let num of nums) {
        total += num;
    }

    return total;
}
console.log(sum(1, 2, 3, 4));

//Assisment 3
const square = (n) => n * n;
const isEven = (n) => n % 2 === 0;
const toPoint = (x, y) => ({ x, y });

// Test the functions
console.log(square(5));      
console.log(isEven(10));      
console.log(isEven(7));       
console.log(toPoint(4, 8));   

function clamp(min, max, value) {
    return Math.max(min, Math.min(max, value));
}
console.log(clamp(0, 10, 15));
console.log(clamp(0, 10, -3));
console.log(clamp(0, 10, 7)); 

function makeCounter() {
    let count = 0;   // Private variable
    return function () {
        count++;
        return count;
    };
}
const counter1 = makeCounter();
const counter2 = makeCounter();
console.log(counter1()); 
console.log(counter1()); 
console.log(counter1()); 
console.log(counter2()); 
console.log(counter2()); 
console.log(counter1());

function makeMultiplier(multiplier) {

    return function (number) {
        return number * multiplier;
    };
}
const multiplyBy3 = makeMultiplier(3);
console.log(multiplyBy3(10));          
console.log(makeMultiplier(5)(4));     
console.log(makeMultiplier(0.5)(100)); 

function compose(f, g) {
    return function (x) {
        return f(g(x));
    };
}
const add1 = (x) => x + 1;
const double1 = (x) => x * 2;
const result = compose(add1, double1);
console.log(result(5));  
console.log(compose(add1, double1)(5)); 

function repeat(action, times) {
    for (let i = 0; i < times; i++) {
        action(i);
    }
}
repeat((i) => console.log("step", i), 3);


function once(fn) {
    let hasRun = false;

    return function () {
        if (!hasRun) {
            hasRun = true;
            fn();
        }
    };
}
const init = once(() => console.log("init"));
init();
init();
init();


// Regular method - 'this' refers to the object itself.
const refObject = {
    value: 0,

    inc() {
        this.value += 1;
        return this.value;
    }
};

// Arrow function - 'this' is NOT bound to the object.
// It uses the surrounding (lexical) 'this', so it does
// not refer to the 'bad' object.

const noObjectRef = {
    value: 0,

    inc: () => {
        this.value += 1;
        return this.value;
    }
};

// Test regular method
console.log(refObject.inc()); // 1
console.log(refObject.inc()); // 2
console.log(refObject.value); // 2

// Test arrow method
try {
    console.log(noObjectRef.inc());
} catch (error) {
    console.log(error.message);
}

console.log(noObjectRef.value);


const products = [
    { name: "Mouse", price: 500, category: "tech" },
    { name: "Desk", price: 3000, category: "furniture" },
    { name: "Keyboard", price: 1200, category: "tech" },
];
const names = products.map(product => product.name);
console.log("Product Names:", names);
const techProducts = products.filter(product => product.category === "tech");
console.log("Tech Products:", techProducts);
const totalPrice = techProducts.reduce((total, product) => {
    return total + product.price;
}, 0);
console.log("Total Price of Tech Products:", totalPrice);


const factorial = function fact(n) {
    if (n === 0) {
        return 1;
    }
    return n * fact(n - 1);
};
console.log(factorial(0)); 
console.log(factorial(5)); 