import fs from "fs";

const studentData = [
  {
    id: 1,
    name: "Alice Johnson",
    age: 20,
    course: "Computer Science",
    grades: {
      math: 90,
      programming: 95,
    },
  },
  {
    id: 2,
    name: "Bob Smith",
    age: 22,
    course: "Data Science",
    grades: {
      statistics: 88,
      machine_learning: 92,
    },
  },
  {
    id: 3,
    name: "Carol Williams",
    age: 21,
    course: "Web Development",
    grades: {
      html: 95,
      javascript: 89,
    },
  },
];

const studentsData = JSON.stringify(studentData);

// 1- Creating & writing students data to students.json file (sync)
function writeStudentsSync() {
  fs.writeFileSync("students.json", studentsData, (err) => {
    if (err) {
      console.log("Error occured while writing Data", err);
    } else {
      console.log("Data wrote successfully");
    }
  });
}

// 2. Read students data (sync)
function readStudentsSync() {
  const content = fs.readFileSync("students.json", "utf-8");
  return JSON.parse(content);
}

// 3. Add new student (sync)
function addStudentSync(newStudent) {
  const students = readStudents();
  students.push(newStudent);
  writeStudents(students);
}

// 4. Update  student's course  (sync)
function updateCourseSync(studentId, newCourse) {
  const students = readStudents();
  const studentIndex = students.findIndex((s) => s.id === studentId);
  if (studentIndex !== -1) {
    students[studentIndex].course = newCourse;
    writeStudents(students);
  }
}

// 5. Delete  student (sync)
function deleteStudentSync(studentId) {
  const students = readStudents();
  const updated = students.filter((s) => s.id !== studentId);
  if (updated.length !== students.length) {
    writeStudents(updated);
  }
}

//Async Functions

// 1- Creating & writing students data to students.json file
async function writeStudentsAsync() {
  try {
    await fs.writeFile("students.json", studentsData);
  } catch (err) {
    console.error("Error writing to file:", err.message);
  }
}

// 2- Read students data
async function readStudentsAsync() {
  try {
    const content = await fs.readFile("students.json", "utf-8");
    return JSON.parse(content);
  } catch (err) {
    console.error("Error reading file:", err.message);
  }
}

// 3. Add a new student
async function addStudentAsync(newStudent) {
  try {
    const students = await readStudentsAsync();
    students.push(newStudent);
    await writeStudentsAsync(students);
    console.log(`Student added.`);
  } catch (err) {
    console.error("Error adding student", err.message);
  }
}

// 4. Update a student's course
async function updateCourseAsync(studentId, newCourse) {
  try {
    const students = await readStudentsAsync();
    const studentIndex = students.findIndex((s) => s.id === studentId);

    if (studentIndex !== -1) {
      students[studentIndex].course = newCourse;
      await writeStudentsAsync(students);
      console.log(`Student's course updated.`);
    } else {
      console.log("Student not found.");
    }
  } catch (err) {
    console.error("Error updating course ", err.message);
  }
}

// 5. Delete a student
async function deleteStudentAsync(studentId) {
  try {
    const students = await readStudentsAsync();
    const studentIndex = students.findIndex((s) => s.id === studentId);

    if (studentIndex !== -1) {
      students.splice(studentIndex, 1);
      await writeStudentsAsync(students);
      console.log(`Student deleted.`);
    } else {
      console.log("Student not found.");
    }
  } catch (err) {
    console.error("Error deleting student ", err.message);
  }
}

module.exports = {
  addStudentAsync,
  updateCourseAsync,
  deleteStudentAsync,
  readStudentsAsync,
  writeStudentsAsync,
};
