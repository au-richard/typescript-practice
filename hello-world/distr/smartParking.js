"use strict";
const whereCanIPark = function (spots, vehicle) {
    for (let r = 0; r < spots.length; r++) {
        for (let c = 0; c < spots[r].length; c++) {
            let openSpot = spots[r][c];
            if (vehicle === "regular" && openSpot === "R") {
                return [c, r];
            }
            else if (vehicle === "small" && (openSpot === "R" || openSpot === "S")) {
                return [c, r];
            }
            else if (vehicle === "motorcycle" && (openSpot === "R" || openSpot === "S" || openSpot === "M")) {
                return [c, r];
            }
        }
    }
    return false;
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