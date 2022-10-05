const multiplicationTable = (maxValue: number): string => {
  let num = 0;
  let result = "";
  for (let i = 1; i <= maxValue; i++) {
    for (let h = 1; h <= maxValue; h++) {
      num = i * h;
      result += num + " ";
    }
    result += "\n";
  }
  return result;
};