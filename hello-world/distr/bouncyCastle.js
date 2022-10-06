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
const prismVolume = (height, width, depth) => {
    let result = 0;
    result = (width * depth) * height;
    return result;
};
console.log(prismVolume(3, 4, 5) === 60);
const totalVolume = (solids) => {
    let total = 0;
    for (const solid of solids) {
        if (solid.type === "sphere") {
            total += sphereVolume(solid.radius);
        }
        else if (solid.type === "cone") {
            total += coneVolume(solid.radius, solid.height);
        }
    }
    return total;
};
const largeSphere = {
    type: 'sphere',
    radius: 40
};
const smallSphere = {
    type: 'sphere',
    radius: 10
};
const cone = {
    type: 'cone',
    radius: 3,
    height: 5
};
const duck = [
    largeSphere,
    smallSphere,
    cone
];
//# sourceMappingURL=bouncyCastle.js.map