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
function calculateTax(income: number, taxYear = 2022): number {
  return taxYear < 2022 ? income * 1.2 : income * 1.3;
}

calculateTax(15_000);
calculateTax(10_000, 2023);

// Objects
// This first way would make you redeclare a new employee object every time I want to use one
// let employee: {
//   // read only makes sure you can't change object key value
//   readonly id: number,
//   name: string,
//   retire: (date: Date) => void;
// } = {
//   id: 1,
//   name: "Richard",
//   retire: (date: Date) => {
//     console.log(date);
//   }
// };

// Using Type for modular code in objects
// Pascal Case for type
// Can reuse type like Employee in multiple different places
type Employee = {
  // read only makes sure you can't change object key value
  readonly id: number,
  name: string,
  retire: (date: Date) => void;
};
let employee: Employee = {
  id: 1,
  name: "Richard",
  retire: (date: Date) => {
    console.log(date);
  }
};


// age Calculator
const ageCalculator = function (name: string, yearOfBirth: number, currentYear: number): string {
  let age = 0;
  if (yearOfBirth > currentYear) {
    console.log("This is invalid input");

    return "Invalid input. Birth year greater than current year.";
  } else {
    age = currentYear - yearOfBirth;
    console.log("This is age:" + age);

    return `${name} is ${age} years old.`;
  }
};
console.log(ageCalculator("Suzie", 1984, 2016));
console.log(ageCalculator("Jack", 2004, 2016));
console.log(ageCalculator("Ali", 2015, 2015));

// Last Index
const lastIndexOf = function (numArr: number[], num: number): number {
  for (let i = numArr.length - 1; i >= -1; i--) {
    if (numArr[i] === num) {
      return i;
    }
  }
  return -1;
};
console.log(lastIndexOf([0, 1, 4, 1, 2], 1), "=?", 3);
console.log(lastIndexOf([0, 1, 4, 1, 2], 2), "=?", 4);
console.log(lastIndexOf([0, 1, 4, 1, 2], 3), "=?", -1);
console.log(lastIndexOf([5, 5, 5], 5), "=?", 2);
console.log(lastIndexOf([], 3), "=?", -1);
console.log(lastIndexOf([3], 3), "=?", 0);