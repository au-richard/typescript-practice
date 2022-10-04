"use strict";
const camelCase = (input) => {
    let output = "";
    for (let i = 0; i < input.length; i++) {
        input[i - 1] === " " ? output += input[i].toUpperCase() : output += input[i];
    }
    return output.split(" ").join("");
};
//# sourceMappingURL=caseMaker.js.map