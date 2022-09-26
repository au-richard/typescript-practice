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
let employee: {
  // read only makes sure you can't change object key value
  readonly id: number,
  name: string,
  retire: (date: Date) => void;
} = {
  id: 1,
  name: "Richard",
  retire: (date: Date) => {
    console.log(date);
  }
};

