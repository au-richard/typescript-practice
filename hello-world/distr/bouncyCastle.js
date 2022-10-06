"use strict";
const PI = 3.14159;
const sphereVolume = (radius) => {
    let result = 0;
    result = (4 * PI * Math.pow(radius, 3)) / 3;
    return result;
};
console.log(4186 < sphereVolume(10) && sphereVolume(10) < 4189);
//# sourceMappingURL=bouncyCastle.js.map