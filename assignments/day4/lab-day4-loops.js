let n = 5;
let sum = 0;
for (let i = 1; i <= n; i++) {
    sum += i;
}
console.log("Sum of first " + n + " natural numbers is: " + sum);


let numbers = [64, 34, 25, 12, 22, 11, 90];
console.log("Before Sorting:" + numbers);
for (let i = 0; i < numbers.length - 1; i++) {

    for (let j = 0; j < numbers.length - i - 1; j++) {

        if (numbers[j] > numbers[j + 1]) {
            let temp = numbers[j];
            numbers[j] = numbers[j + 1];
            numbers[j + 1] = temp;
        }
    }
}
console.log("After Sorting:" + numbers);


console.log("Print Prime Numbers from 2 to 50:");

for (let num = 2; num <= 50; num++) {

    let isPrime = true;

    for (let i = 2; i <= Math.sqrt(num); i++) {

        if (num % i === 0) {
            isPrime = false;
            break;
        }
    }
    if (isPrime) {
        console.log(num);
    }
}


let count = 10;

let first = 0;
let second = 1;

console.log("Fibonacci Series:");

for (let i = 1; i <= count; i++) {
    console.log(first);

    let next = first + second;
    first = second;
    second = next;
}

console.log("Armstrong Numbers from 1 to 999:");

for (let num = 1; num <= 999; num++) {

    let originalNum = num;

    let digits = 0;
    let temp = num;

    // Count digits
    while (temp > 0) {
        digits++;
        temp = Math.floor(temp / 10);
    }

    temp = num;
    let sum = 0;

    // Calculate Armstrong sum
    while (temp > 0) {
        let digit = temp % 10;
        sum += Math.pow(digit, digits);
        temp = Math.floor(temp / 10);
    }

    if (sum === originalNum) {
        console.log(originalNum);
    }
}


let s = 6;
let factorial = 1;

for (let i = s; i >= 1; i--) {
    factorial *= i;
}

console.log(s + "! = " + factorial);

let num = 12121;
let originalNum = num;

let reversed = 0;

while (num > 0) {

    let digit = num % 10;          // Extract last digit
    reversed = reversed * 10 + digit;
    num = Math.floor(num / 10);    // Remove last digit
}

if (originalNum === reversed) {
    console.log(originalNum + " is a Palindrome");
} else {
    console.log(originalNum + " is NOT a Palindrome");
}


let a = 48;
let b = 18;

while (b !== 0) {
    let remainder = a % b;
    a = b;
    b = remainder;
}

console.log("GCD =", a);


// Right-Aligned Triangle of Numbers

let m = 4;

for (let i = 1; i <= m; i++) {

    let row = "";

    // Print leading spaces
    for (let j = 1; j <= m - i; j++) {
        row += "  ";
    }

    // Print numbers
    for (let j = 1; j <= i; j++) {
        row += j + " ";
    }

    console.log(row);
}