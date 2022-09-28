const numVowels = function (data: string): number {
  let num = 0;
  const newArr = data.split("");
  for (let i = 0; i < newArr.length; i++) {
    if (newArr[i] === "a" || newArr[i] === "e" || newArr[i] === "i" || newArr[i] === "o" || newArr[i] === "u") {
      num += 1;
    } else if (newArr[i] === "A" || newArr[i] === "E" || newArr[i] === "I" || newArr[i] === "O" || newArr[i] === "U") {
      num += 1;
    }
  }
  return num;
};

console.log(numVowels("orange"));
console.log(numVowels("lighthouse labs"));
console.log(numVowels("aeiou"));
console.log(numVowels("Artichoke"));
console.log(numVowels("HAPPY BIRTHDAY"));
console.log(numVowels("AEIOU"));