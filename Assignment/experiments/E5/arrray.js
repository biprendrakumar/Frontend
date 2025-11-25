
// Task 3: Array Methods Practice

let numbers = [10, 25, 30, 45, 50];

// map() — Double each number
let doubled = numbers.map(num => num * 2);
console.log("Doubled:", doubled);

// filter() — Get numbers above 30
let above30 = numbers.filter(num => num > 30);
console.log("Numbers above 30:", above30);

// reduce() — Find the sum
let sum = numbers.reduce((total, num) => total + num, 0);
console.log("Sum:", sum);

// forEach() — Print each number
numbers.forEach(num => console.log("Number:", num));

