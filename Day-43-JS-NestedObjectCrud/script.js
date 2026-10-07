// ==========================================
// NESTED OBJECT - CRUD OPERATIONS
// ==========================================

let student = {
  id: 101,
  name: "Janaki",
  course: "Full Stack Web Development",

  // Nested Object
  contact: {
    email: "janaki@example.com",
    city: "Hyderabad"
  },

  // Array Property
  skills: ["HTML", "CSS"]
};

// ==========================================
// 1. CREATE (Add new properties)
// ==========================================

// Add top-level property
student.batch = 60;

// Add nested property
student.contact.pincode = 500001;

// Add element to array
student.skills.push("JavaScript");

// ==========================================
// 2. READ (Retrieve values)
// ==========================================

console.log("Name:", student.name);
console.log("City:", student.contact.city);
console.log("Skills:", student.skills);

// ==========================================
// 3. UPDATE (Modify existing values)
// ==========================================

// Update nested property
student.contact.city = "Bangalore";

// Update top-level property
student.course = "Full Stack Java";

// ==========================================
// 4. DELETE (Remove properties)
// ==========================================

// Delete nested property
delete student.contact.pincode;

// Remove last element from array
student.skills.pop();

// ==========================================
// FINAL RESULT
// ==========================================

console.log("======= FINAL OBJECT =======");
console.log(student);