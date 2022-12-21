"use strict";
const sumLargestNum = function (data) {
  let num = data[0];
  if (data.length < 2) {
    return "Array length must be at least 2";
  } else {
    for (let i = 1; i < data.length; i++) {
      num += data[i];
    }
    return `The answer is ${num}.`;
  }
};

console.log(sumLargestNum([10]));
console.log(sumLargestNum([1, 10]));
console.log(sumLargestNum([1, 2, 3]));
console.log(sumLargestNum([10, 4, 34, 6, 92, 2]));
