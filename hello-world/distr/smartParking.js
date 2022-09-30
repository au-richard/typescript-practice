"use strict";
const whereCanIPark = function (spots, vehicle) {
    let openSpot = [0, 0];
    let result = false;
    for (let r = 0; r < spots.length; r++) {
        for (let c = 0; c < spots[r].length; c++) {
            if (vehicle === "regular" && spots[r][c] === "R") {
                openSpot = [c, r];
                return openSpot;
            }
            else if (vehicle === "small" && (spots[r][c] === "R" || spots[r][c] === "S")) {
                openSpot = [c, r];
                return openSpot;
            }
            else if (vehicle === "motorcycle" && (spots[r][c] === "R" || spots[r][c] === "S" || spots[r][c] === "M")) {
                openSpot = [c, r];
                return openSpot;
            }
            else {
                return result;
            }
        }
    }
};
console.log(whereCanIPark([
    ['s', 's', 's', 'S', 'R', 'M'],
    ['s', 'M', 's', 'S', 'r', 'M'],
    ['s', 'M', 's', 'S', 'r', 'm'],
    ['S', 'r', 's', 'm', 'r', 'M'],
    ['S', 'r', 's', 'm', 'r', 'M'],
    ['S', 'r', 'S', 'M', 'M', 'S']
], 'regular'));
console.log(whereCanIPark([
    ['M', 'M', 'M', 'M'],
    ['M', 's', 'M', 'M'],
    ['M', 'M', 'M', 'M'],
    ['M', 'M', 'r', 'M']
], 'small'));
console.log(whereCanIPark([
    ['s', 's', 's', 's', 's', 's'],
    ['s', 'm', 's', 'S', 'r', 's'],
    ['s', 'm', 's', 'S', 'r', 's'],
    ['S', 'r', 's', 'm', 'r', 's'],
    ['S', 'r', 's', 'm', 'R', 's'],
    ['S', 'r', 'S', 'M', 'm', 'S']
], 'motorcycle'));
//# sourceMappingURL=smartParking.js.map