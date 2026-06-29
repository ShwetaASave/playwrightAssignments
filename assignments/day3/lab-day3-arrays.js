//Assignment 1: Create and inspect an array
console.log("*********** Assignment 1 *********** ");
const studentNames = ["Arnav", "Vihan", "Shweta", "Aarav", "Anay"];

console.log(studentNames);
console.log(studentNames.length);
console.log(studentNames[0]);
console.log(studentNames.at(-1));
console.log(Array.isArray(studentNames));

//Assignment 2: push , pop, shift , unshift
console.log("*********** Assignment 2 *********** ");
const studentRollNumbers = [10, 20, 30];

console.log(studentRollNumbers);

studentRollNumbers.push(40);
console.log(studentRollNumbers);

const poppedValue = studentRollNumbers.pop();
console.log(poppedValue);
console.log(studentRollNumbers);

studentRollNumbers.unshift(5);
console.log(studentRollNumbers);

const shiftedValue = studentRollNumbers.shift();
console.log(shiftedValue);
console.log(studentRollNumbers);

//Assignment 3: slice vs splice
console.log("*********** Assignment 3 *********** ");
const baseArray = [1, 2, 3, 4, 5];

const sliceCopy = [...baseArray];
const slicedResult = sliceCopy.slice(1, 4);
console.log("slice result:", slicedResult);
console.log("original after slice unchanged:", baseArray);

const spliceCopy = [...baseArray];
const removedItems = spliceCopy.splice(2, 1, 99, 100);
console.log("splice removed items:", removedItems);
console.log("array after splice:", spliceCopy);
// slice does not mutate the source array; splice mutates the source array.

//Assignment 4: map  — transform prices with tax
console.log("*********** Assignment 4 *********** ");
const prices = [100, 250, 80, 420];

const taxedPrices = prices.map((x) => Math.round(x * 1.18 * 100) / 100);

console.log("original prices:", prices);
console.log("taxed prices (18% GST):", taxedPrices);

//Assignment 5: filter and reduce — cart tota
console.log("*********** Assignment 5 *********** ");
const cart = [
  { name: "Pen", price: 10, inStock: true },
  { name: "Book", price: 200, inStock: true },
  { name: "Bag", price: 500, inStock: false },
];
const inStockItems = cart.filter(item => item.inStock);
const totalPrice = inStockItems.reduce((total, item) => total + item.price, 0);

console.log("in-stock items:", inStockItems);
console.log("total price of in-stock items:", totalPrice);

//Assignment 6: Search and boolean checks.
console.log("*********** Assignment 6 *********** ");
const users = [
  { id: 1, name: "Asha", active: true },
  { id: 2, name: "Ravi", active: false },
  { id: 3, name: "Meera", active: true },
];
const userToFind = users.find(user => user.id === 2);
console.log("user with id 2:", userToFind);
const findMeera = users.find(user => user.name === "Meera");
console.log("User Meera index: ", findMeera.id);
const activeusers = users.filter(user => user.active);
console.log("Active users: ", activeusers);
const someActive = users.some(user => user.active);
console.log("Is there any active user? ", someActive);
const everyActive = users.every(user => user.active);
console.log("Are all users active? ", everyActive);


//Assignment 7: Numeric sort and reverse
console.log("*********** Assignment 7 *********** ");
const numbers = [10, 2, 50, 1, 25];
const ascendingNumbers = [...numbers].sort((a, b) => a - b);
console.log("Ascending sort:", ascendingNumbers);  

const descendingNumbers = [...numbers].sort((a, b) => b - a);
console.log("Descending sort:", descendingNumbers); 

//Stretch: Sort users by age then name
console.log("*********** Stretch: Sort users by age then name *********** ");
const usersByAgeAndName = [
  { name: "Ravi", age: 24 },
  { name: "Asha", age: 22 },
  { name: "Meera", age: 24 },
  { name: "Arun", age: 22 },
  { name: "Vikram", age: 27 },
];

const sortedUsersByAgeThenName = [...usersByAgeAndName].sort((a, b) => {
  if (a.age !== b.age) return a.age - b.age;
  return a.name.localeCompare(b.name);
});

console.log("Original users:", usersByAgeAndName);
console.log("Sorted users (age then name):", sortedUsersByAgeThenName);

//Assignment 8:    flat and remove duplicates
console.log("*********** Assignment 8 *********** ");
const nested = [1, [2, 3], [4, [5, 6]]];
const flattened = nested.flat(2);
console.log("Flattened array:", flattened);

const dupes = [1, 1, 2, 3, 3, 3, 4];  
const uniqueArray = [...new Set(dupes)];
console.log("Unique array:", uniqueArray);

// Assignment 9: JSON.stringify and JSON.parse
console.log("*********** Assignment 9 *********** ");
const obj ={ course: "JS", day: 3, topics: ["arrays", "json"] } ;
const jsonString = JSON.stringify(obj);
console.log("JSON string:", jsonString);
const parsedObj = JSON.parse(jsonString);
console.log("Parsed object:", parsedObj);
console.log("Formatted JSON :", JSON.stringify(obj, null, 2));
console.log("topic:", parsedObj.topics[1]);

// Assignment 10: Replacer — hide sensitive fields
console.log("*********** Assignment 10 *********** ");
const user = { id: 7, name: "Priya", password: "secret123", role: "admin" };
const jsonStringWithReplacer = JSON.stringify(user, (key, value) => {
  if (key === "password") return undefined;
  return value;
});
console.log("JSON string:", jsonStringWithReplacer);

// Assignment 11: Group by role with reduce
console.log("*********** Assignment 11 *********** ");
const team = [
  { name: "A", role: "dev" },
  { name: "B", role: "qa" },
  { name: "C", role: "dev" },
];
const grouped = team.reduce((acc, member) => {
  if (!acc[member.role]) acc[member.role] = [];
  acc[member.role].push(member);
  return acc;
}, {});
console.log("Grouped by role:", grouped);
console.log("Number of devs:", grouped.dev.length);
grouped.dev.length 

// Assignment 12: Nested path access (JSON path in practice)
console.log("*********** Assignment 12 *********** ");
const order = {
  id: "ORD-99",
  customer: { name: "Kiran", address: { city: "Mumbai", pin: "400001" } },
  items: [{ sku: "A1", qty: 2 }],
};

console.log("City:", order.customer.address.city);
console.log("Billing city (optional chaining):", order.billing?.city);

const path = "customer.address.pin";
const pin = path.split(".").reduce((acc, key) => acc?.[key], order);
console.log("Pin:", pin);