// 1. Variables
let name = "Aryan";
const age = 20;
var city = "Pune";

console.log("Name:", name);
console.log("Age:", age);
console.log("City:", city);

// 2. Data Types
let isStudent = true;
let marks = 95.5;
let subjects = ["Math", "CS", "Physics"];

console.log("Is Student?", isStudent);
console.log("Marks:", marks);
console.log("Subjects:", subjects);

// 3. Functions
function greet(user) {
  return `Hello, ${user}! 👋`;
}
console.log(greet(name));

// 4. Conditionals
if (age >= 18) {
  console.log("You are an adult ✅");
} else {
  console.log("You are a minor ❌");
}

// 5. Loops
for (let i = 1; i <= 5; i++) {
  console.log("Counting:", i);
}

// 6. Objects
let student = {
  name: "Aryan",
  age: 20,
  isStudent: true,
  subjects: ["Math", "CS", "Physics"]
};
console.log("Student Object:", student);
console.log("Student Name:", student.name);
