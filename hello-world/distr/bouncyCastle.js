"use strict";
const PI = 3.14159;
const sphereVolume = (radius) => {
    let result = 0;
    result = (4 * PI * Math.pow(radius, 3)) / 3;
    return result;
};
console.log(4186 < sphereVolume(10) && sphereVolume(10) < 4189);
const coneVolume = (radius, height) => {
    let result = 0;
    result = (PI * Math.pow(radius, 2) * height) / 3;
    return result;
};
console.log(45 < coneVolume(3, 5) && coneVolume(3, 5) < 49);
//# sourceMappingURL=bouncyCastle.js.map