"use strict";
const checkAir = function (samples, threshold) {
    let counter = 0;
    for (let i = 0; i < samples.length; i++) {
        if (samples[i] === "dirty") {
            counter++;
        }
    }
    if ((counter % samples.length) > (threshold *= 10)) {
        return "Polluted";
    }
    else {
        return "Clean";
    }
};
//# sourceMappingURL=inTheAirTonight.js.map