"use strict";
const instructorWithLongestName = function (instructors) {
    let currentName = instructors[0].name;
    for (let i = 1; i < instructors.length; i++) {
        if (instructors[i].name.length > currentName.length) {
            currentName = instructors[i].name;
        }
    }
    return currentName;
};
//# sourceMappingURL=longestName.js.map