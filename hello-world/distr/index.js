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
function calculateTax(income, taxYear) {
    return income < 50000 ? income * 1.2 : income * 1.3;
}
calculateTax(10000, 2022);
//# sourceMappingURL=index.js.map