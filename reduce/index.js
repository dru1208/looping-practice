const showIt = function(scenario, anyObject) {
  console.log(`Scenario: ${scenario}`);
  console.log(JSON.stringify(anyObject, null, 2));
  console.log("################################");
}

// same drill as last time, only for loops
// find the count of all the grades
// find the count of all the student names
// find the sum of all the grades
// make a string with all the names back to back
// make an hash with the name as the key, and the number of repetitions as the value using student names
// make a hash with the id of the student as the key, and the class periods as the value

const grades = [70, 50, 70, 24, 77, 93, 99, 82, 42, 59, 73]
const studentNames = ["andrew", "andrew", "scott", "scott", "scott", "maggie", "vlad", "vlad", "matt", "matt", "matt"]

const students = [
  {
    name: "lil jon",
    age: 2,
    id: 1431,
    gender: "male",
    major: "music",
    enrolled: false,
    classPeriods: ["a", "b", "c"]
  },
  {
    name: "bill blanks",
    age: 62,
    id: 203,
    gender: "male",
    major: "environmental engineering",
    enrolled: true,
    classPeriods: ["a", "d", "g"]
  },
  {
    name: "steve woz",
    age: 104,
    id: 8869,
    gender: "male",
    major: "computer engineering",
    enrolled: false,
    classPeriods: ["b", "d", "f"]

  },
  {
    name: "michelle chen",
    age: 22,
    id: 428,
    gender: "female",
    major: "economics",
    enrolled: true,
    classPeriods: ["c", "d", "g"]
  },
  {
    name: "liz iac",
    age: 26,
    id: 222,
    gender: "female",
    major: "chemical engineering",
    enrolled: false,
    classPeriods: ["b", "e", "f"]
  },
]


const checkIt = function() {
  // showIt("copy-01", evenGradesList(grades));
}

checkIt();
