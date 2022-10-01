interface singleInstructor {
  name: string,
  course: string;
}
const instructorWithLongestName = function (instructors: singleInstructor[]) {
  let currentName = instructors[0].name;
  for (let i = 1; i < instructors.length; i++) {
    if (instructors[i].name.length > currentName.length) {
      currentName = instructors[i].name;
    }
  }
  return currentName;
};

console.log(instructorWithLongestName([
  { name: "Samuel", course: "iOS" },
  { name: "Jeremiah", course: "Web" },
  { name: "Ophilia", course: "Web" },
  { name: "Donald", course: "Web" }
]));
console.log(instructorWithLongestName([
  { name: "Matthew", course: "Web" },
  { name: "David", course: "iOS" },
  { name: "Domascus", course: "Web" }
]));