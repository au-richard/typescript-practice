const whereCanIPark = function (spots: string[], vehicle: string) {
  let openSpot: number[] = [0, 0];
  for (let r = 0; r < spots.length; r++) {
    for (let c = 0; c < spots[r].length; c++) {
      if (vehicle === "regular" && spots[r][c] === "R") {
        openSpot = [c, r];
      } else if (vehicle === "small" && (spots[r][c] === "R" || spots[r][c] === "S")) {
        openSpot = [c, r];
      } else if (vehicle === "motorcycle" && (spots[r][c] === "R" || spots[r][c] === "S" || spots[r][c] === "M")) {
        openSpot = [c, r];
      }
      else {
        return false;
      }
    }
  };
  return openSpot;
};