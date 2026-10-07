// ==========================================
// CREATING OBJECT USING OBJECT CONSTRUCTOR
// ==========================================

let student = new Object();

// Retrieve initial empty object
console.log("Before:");
console.log(student);

// Adding Properties (Dot Notation & Bracket Notation)
student.id = 101;
student.name = "Priya";
student["age"] = 21;
student.course = "Full Stack Web Development";
student["batch-code"] = "FSD-60";
student["enrolled-subjects"] = "JavaScript, React, Node.js";
student.gpa = 3.8;
student["is-passed"] = true;
student["contact-email"] = "priya@example.com";
student.city = "Hyderabad";

// Updating Properties
student.gpa = 3.9;                       
student["city"] = "Bangalore";           

// Retrieving Specific Properties
console.log("\nStudent Name:", student.name);
console.log("Enrolled Subjects:", student["enrolled-subjects"]);

// Deleting Properties
delete student["is-passed"];
delete student.gpa;

// Retrieve object after modifications
console.log("\n======= After =======");
console.log(student);