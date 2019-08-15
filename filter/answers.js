const showIt = function(scenario, anyObject) {
  console.log(`Scenario: ${scenario}`);
  console.log(JSON.stringify(anyObject, null, 2));
  console.log("################################");
}

const grades = [70, 50, 70, 24, 77, 93, 99, 82, 42, 59, 73]

const students = [
  {
    name: "lil jon",
    age: 2,
    id: 1431,
    gender: "male",
    major: "music",
    enrolled: false
  },
  {
    name: "bill blanks",
    age: 62,
    id: 203,
    gender: "male",
    major: "environmental engineering",
    enrolled: true
  },
  {
    name: "steve woz",
    age: 104,
    id: 8869,
    gender: "male",
    major: "computer engineering",
    enrolled: false
  },
  {
    name: "michelle chen",
    age: 22,
    id: 428,
    gender: "female",
    major: "economics",
    enrolled: true
  },
  {
    name: "liz iac",
    age: 26,
    id: 222,
    gender: "female",
    major: "chemical engineering",
    enrolled: false
  },
]

const teachers = [
  {
    name: "jbiebs",
    age: 22,
    id: 1888,
    gender: "male",
    subject: "statistics",
    department: "mathematics"
  },
  {
    name: "cameron",
    age: 60,
    id: 1000,
    gender: "female",
    subject: "gender studies",
    department: "humanities"

  },
  {
    name: "jenny yoon",
    age: 34,
    id: 5444,
    gender: "male",
    subject: "mathematics",
    department: "humanities"
  },
]

function evenGradesList(grades) {
  const newList = []
  for (let grade of grades) {
    if (grade % 2 === 0) {
      newList.push(grade)
    }
  }
  return newList
}

function divisibleThreeList(grades) {
  const newList = []
  for (let grade of grades) {
    if (grade % 2 === 0) {
      newList.push(grade)
    }
  }
  return newList
}

function makePassingList(grades) {
  const newList = []
  for (let grade of grades) {
    if (grade > 60) {
      newList.push(grade)
    }
  }
  return newList
}

function enrolledStudents(students) {
  const enrolled = []
  for (let student of students) {
    if (enrolled) {
      enrolled.push(student)
    }
  }
  return enrolled
}

function overAgeStudents(students) {
  const overAged = []
  for (let student of students) {
    if (student.age > 25) {
      overAged.push(student)
    }
  }
  return overAged
}

function maleEngineers(students) {
  const mEs = []
  for (let student of students) {
    if (student.gender === "male" && student.major.includes("engineer")) {
      mEs.push(student)
    }
  }
  return mEs
}

function humanitiesTeachers(teachers) {
  const hTs = []
  for (let teacher of teachers) {
    if (teacher.department === "humanities") {
      hTs.push(teacher)
    }
  }
  return hTs
}

const checkIt = function() {
  showIt("copy-01", evenGradesList(grades));
}

checkIt();
