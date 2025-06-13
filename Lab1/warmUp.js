// warmup.js

const users = [
  { name: "John Doe", age: 28, role: "developer" },
  { name: "Jane Smith", age: 32, role: "admin" },
  { name: "Bob Johnson", age: 24, role: "developer" },
  { name: "Sarah Williams", age: 27, role: "manager" },
  { name: "Mike Brown", age: 35, role: "admin" },
];

// 1. Filter users above age 30
const above30 = users.filter((user) => user.age > 30);
console.log("Users above age 30:", above30);

// 2. Transform the data to only include names
const names = users.map((user) => user.name);
console.log("User names:", names);

// 3. Find the first user with role "admin"
const firstAdmin = users.find((user) => user.role === "admin");
console.log("First admin:", firstAdmin);

// 4. Find the last user with role "admin"
const lastAdmin = [...users].reverse().find((user) => user.role === "admin");
console.log("Last admin:", lastAdmin);
// Or
// Find the last user with role "admin"
const lastAdmins = users.findLast(user => user.role === "admin");


// 5. Deep copy function for nested objects
function deepCopy(obj) {
  return JSON.parse(JSON.stringify(obj));
}

// Example:
const nestedUser = {
  name: "Alice",
  profile: {
    age: 30,
    skills: ["JS", "React"],
  },
};

const copiedUser = deepCopy(nestedUser);
copiedUser.profile.skills.push("Node.js");

console.log("Original User:", nestedUser);
console.log("Deep Copied User:", copiedUser);
