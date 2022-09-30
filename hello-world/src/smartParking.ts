// Need to fix output results for all 3 to be correct

// Need to add 2nd [] in type declaration for array within array
const whereCanIPark = function (spots: string[][], vehicle: string) {
  for (let r = 0; r < spots.length; r++) {
    for (let c = 0; c < spots[r].length; c++) {
      let openSpot = spots[r][c];
      if (vehicle === "regular" && openSpot === "R") {
        return [c, r];
      } else if (vehicle === "small" && (openSpot === "R" || openSpot === "S")) {
        return [c, r];
      } else if (vehicle === "motorcycle" && (openSpot === "R" || openSpot === "S" || openSpot === "M")) {
        return [c, r];
      }
    }
  }
  return false;
};

console.log(whereCanIPark(
  [
    // COLUMNS ARE X
    // 0    1    2    3    4    5
    ['s', 's', 's', 'S', 'R', 'M'], // 0 ROWS ARE Y
    ['s', 'M', 's', 'S', 'r', 'M'], // 1
    ['s', 'M', 's', 'S', 'r', 'm'], // 2
    ['S', 'r', 's', 'm', 'r', 'M'], // 3
    ['S', 'r', 's', 'm', 'r', 'M'], // 4
    ['S', 'r', 'S', 'M', 'M', 'S']  // 5
  ],
  'regular'
));

console.log(whereCanIPark(
  [
    ['M', 'M', 'M', 'M'],
    ['M', 's', 'M', 'M'],
    ['M', 'M', 'M', 'M'],
    ['M', 'M', 'r', 'M']
  ],
  'small'
));

console.log(whereCanIPark(
  [
    ['s', 's', 's', 's', 's', 's'],
    ['s', 'm', 's', 'S', 'r', 's'],
    ['s', 'm', 's', 'S', 'r', 's'],
    ['S', 'r', 's', 'm', 'r', 's'],
    ['S', 'r', 's', 'm', 'R', 's'],
    ['S', 'r', 'S', 'M', 'm', 'S']
  ],
  'motorcycle'
));