let bins: {
  waste: number,
  recycling: number,
  compost: number;
} = {
  waste: 0,
  recycling: 0,
  compost: 0
};
// const smartGarbage = function (trash: string, bins: object) {
//   if (trash === Object.keys(bins))
// };

const checkAir = function (samples: string[], threshold: number): string {
  let counter = 0;
  for (let i = 0; i < samples.length, i++) {
    if (samples[i] === "dirty") counter++;
  }
  return ((counter % samples.length) > (threshold *= 10)) ? "Polluted" : "Clean";
};

