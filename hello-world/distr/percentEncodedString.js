"use strict";
const urlEncode = function (text) {
    let newString = "";
    text = text.trim();
    for (let i = 0; i < text.length; i++) {
        text[i] === " " ? newString += "%20" : newString += text[i];
    }
    return newString;
};
console.log(urlEncode("Lighthouse Labs"));
console.log(urlEncode(" Lighthouse Labs "));
console.log(urlEncode("blue is greener than purple for sure"));
//# sourceMappingURL=percentEncodedString.js.map