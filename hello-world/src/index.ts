//Testing debugging
let age: number = 20;
if (age < 50) {
  age += 10;
}
console.log(age);

// Trying out different var declarations
let sales = 123_456_789;
let course = "TypeScript";
let is_published = true;
let level;

// Testing types with arrays
let numArray: number[] = [];
let anyArray = [];

// Tuple Arrays
let user: [number, string] = [1, "Richard"];

// Enums
// JavaScript way of labelling constants
// const small = 1;
// const medium = 2;
// const large = 3;

// //PascaleCase
enum Size { Small = "s", Medium = "m", Large = "l" };
let mySize: Size = Size.Medium;
console.log(mySize);

// Functions
function calculateTax(income: number): number {
  return income < 50_000 ? income * 1.2 : income * 1.3;
}
