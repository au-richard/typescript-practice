"use strict";
const multiplicationTable = (maxValue) => {
    let num = 0;
    let result = "";
    for (let i = 1; i <= maxValue; i++) {
        for (let h = 1; h <= maxValue; h++) {
            num = i * h;
            result += num + " ";
        }
        result += "\n";
    }
    return result;
};
console.log(multiplicationTable(1));
console.log(multiplicationTable(5));
console.log(multiplicationTable(10));
console.log(multiplicationTable(12));
console.log(multiplicationTable(23));
