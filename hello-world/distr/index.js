"use strict";
let age = 20;
if (age < 50) {
    age += 10;
}
console.log(age);
let sales = 123456789;
let course = "TypeScript";
let is_published = true;
let level;
let numArray = [];
let anyArray = [];
let user = [1, "Richard"];
var Size;
(function (Size) {
    Size["Small"] = "s";
    Size["Medium"] = "m";
    Size["Large"] = "l";
})(Size || (Size = {}));
;
let mySize = Size.Medium;
console.log(mySize);
function calculateTax(income, taxYear = 2022) {
    return taxYear < 2022 ? income * 1.2 : income * 1.3;
}
calculateTax(15000);
calculateTax(10000, 2023);
let employee = {
    id: 1,
    name: "Richard",
    retire: (date) => {
        console.log(date);
    }
};
const add = (x, y) => x + y;
const multiply = (x, y) => x * y;
console.log(`5 + 9 is ${add(5, 9)}`);
console.log(`5 * 9 is ${multiply(5, 9)}`);
const ageCalculator = function (name, yearOfBirth, currentYear) {
    let age = 0;
    if (yearOfBirth > currentYear) {
        console.log("This is invalid input");
        return "Invalid input. Birth year greater than current year.";
    }
    else {
        age = currentYear - yearOfBirth;
        console.log("This is age:" + age);
        return `${name} is ${age} years old.`;
    }
};
console.log(ageCalculator("Suzie", 1984, 2016));
console.log(ageCalculator("Jack", 2004, 2016));
console.log(ageCalculator("Ali", 2015, 2015));
const lastIndexOf = function (numArr, num) {
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
