"use strict";
const repeatNum = function (data) {
    let result = [];
    let string = "";
    for (let i = 0; i < data.length; i++) {
        let num1 = data[i][0];
        let num2 = data[i][1];
        for (let h = 0; h < num2; h++) {
            string += num1;
        }
        result.push(string);
        string = "";
    }
    return result.join(", ");
};
console.log(repeatNum([[1, 10]]));
console.log(repeatNum([[1, 2], [2, 3]]));
console.log(repeatNum([[10, 4], [34, 6], [92, 2]]));
