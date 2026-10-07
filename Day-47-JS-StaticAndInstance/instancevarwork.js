class Hospital {
    static hospital_Name="Apollo";
    static hospital_City = "Hyderabad";

    //create instance variable and assign the values to them
    set_data(id, name, age, disease, doctor, room) {
        this.patientId = id;
        this.patientName = name;
        this.patientAge = age;
        this.patientDisease = disease;
        this.doctorName = doctor;
        this.roomNumber = room;
    }

       displayPatientDetails() {
        console.log("Hospital Name ", Hospital.hospital_Name);
        console.log("Hospital City ", Hospital.hospital_City);
        console.log("Patient ID ", this.patientId);
        console.log("Patient Name ", this.patientName);
        console.log("Patient Age ", this.patientAge);
        console.log("Disease ", this.patientDisease);
        console.log("Doctor Name ", this.doctorName);
        console.log("Room Number ", this.roomNumber);
    }
}

let patient1 = new Hospital();
console.log("----- Patient 1 -----");
patient1.set_data(101, "Anjali", 25, "Fever", "Dr. Ravi", 201);
patient1.displayPatientDetails();

let patient2 = new Hospital();
console.log("----- Patient 2 -----");
patient2.set_data(102, "Rahul", 30, "Cold", "Dr. Kumar", 202);
patient2.displayPatientDetails();

let patient3 = new Hospital();
console.log("----- Patient 3 -----");
patient3.set_data(103, "Sneha", 28, "Headache", "Dr. Priya", 203);
patient3.displayPatientDetails();

let patient4 = new Hospital();
console.log("----- Patient 4 -----");
patient4.set_data(104, "Kiran", 35, "Back Pain", "Dr. Arun", 204);
patient4.displayPatientDetails();



class College {

    static college_Name = "KHIT Engineering College";
    static college_City = "Hyderabad";

    set_data(id, name, age, branch, year, percentage) {
        this.studentId = id;
        this.studentName = name;
        this.studentAge = age;
        this.studentBranch = branch;
        this.studentYear = year;
        this.studentPercentage = percentage;
    }

    displayStudentDetails() {
        console.log("College Name ", College.college_Name);
        console.log("College City ", College.college_City);
        console.log("Student ID ", this.studentId);
        console.log("Student Name ", this.studentName);
        console.log("Student Age ", this.studentAge);
        console.log("Branch ", this.studentBranch);
        console.log("Year ", this.studentYear);
        console.log("Percentage ", this.studentPercentage);
    }
}

let student1 = new College();
console.log("----- Student 1 -----");
student1.set_data(101, "Janaki", 22, "CSE", 4, 85);
student1.displayStudentDetails();

let student2 = new College();
console.log("----- Student 2 -----");
student2.set_data(102, "Neelima", 21, "ECE", 3, 82);
student2.displayStudentDetails();

let student3 = new College();
console.log("----- Student 3 -----");
student3.set_data(103, "Mouni", 22, "AIML", 4, 88);
student3.displayStudentDetails();

let student4 = new College();
console.log("----- Student 4 -----");
student4.set_data(104, "Kavya", 21, "EEE", 3, 79);
student4.displayStudentDetails();


class Shopping {

    static company_Name = "Amazon";
    static company_City = "Bangalore";

    set_data(id, name, product, price, quantity, payment) {
        this.orderId = id;
        this.customerName = name;
        this.productName = product;
        this.productPrice = price;
        this.productQuantity = quantity;
        this.paymentMode = payment;
    }

    displayOrderDetails() {
        console.log("Company Name ", Shopping.company_Name);
        console.log("Company City ", Shopping.company_City);
        console.log("Order ID ", this.orderId);
        console.log("Customer Name ", this.customerName);
        console.log("Product Name ", this.productName);
        console.log("Product Price ", this.productPrice);
        console.log("Quantity ", this.productQuantity);
        console.log("Payment Mode ", this.paymentMode);
    }
}

let order1 = new Shopping();
console.log("----- Order 1 -----");
order1.set_data(501, "Ravi", "Laptop", 55000, 1, "UPI");
order1.displayOrderDetails();

let order2 = new Shopping();
console.log("----- Order 2 -----");
order2.set_data(502, "Priya", "Mobile", 25000, 2, "Card");
order2.displayOrderDetails();

let order3 = new Shopping();
console.log("----- Order 3 -----");
order3.set_data(503, "Kiran", "Headphones", 3000, 1, "Cash");
order3.displayOrderDetails();

let order4 = new Shopping();
console.log("----- Order 4 -----");
order4.set_data(504, "Sneha", "Smart Watch", 5000, 1, "UPI");
order4.displayOrderDetails();