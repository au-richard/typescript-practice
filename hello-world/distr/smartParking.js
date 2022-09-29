"use strict";
const whereCanIPark = function (spots, vehicle) {
    let openSpot = [0, 0];
    for (let r = 0; r < spots.length; r++) {
        for (let c = 0; c < spots[r].length; c++) {
            if (vehicle === "regular" && spots[r][c] === "R") {
                openSpot = [c, r];
            }
        }
    }
    return openSpot;
};
//# sourceMappingURL=smartParking.js.map