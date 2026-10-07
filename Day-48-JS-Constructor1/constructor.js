// class Test{
//     constructor(myName){
//         console.log("My Name is",myName);
        
//     }
// }
// let t= new Test("constructor")


// class Test {
//     constructor(fname){
//         return fname;
//     }
// }
// let t = new Test("constructor");
// console.log(t);




// class Test {
//     constructor(){
//         console.log("I am constructor");
//     }
// }
// new Test();
// new Test();
// new Test();
// new Test();




// class Student {
//     //creating Instance Variables and setting values to them using parameters 
//     constructor(name,age){
//         this.myName = name;
//         this.myAge = age;
//     }
//     displaydetails() {
//         console.log("My name",this.myName);
//         console.log("My Age",this.myAge);
        
//     }
// }
// let s= new Student("Hero",21);
// //s.set_data("Hero",21);
// s.displaydetails()



// class employee {
//     static org_name="Innomatics Research labs";
//     //creating Instance Variables and setting values to them using parameters 
//     constructor(name,salary,designation){
//         this.myName = name;
//         this.salary = salary;
//         this.designation=designation;
//     }
//     displaydetails() {
//         console.log("employee Company name=", employee.org_name);
//         console.log("Employee name=",this.myName);
//         console.log("Employee salary=",this.salary);
//         console.log("Employee designation=",this.designation);
//     }
// }
// let emp1= new employee("janaki",650000,"python Developer",);
// //s.set_data("Hero",21);
// emp1.displaydetails()



class Shopping {

    static company_Name = "Amazon";
    static company_City = "Bangalore";

    constructor(id, name, product, price, quantity, payment) {
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

console.log("----- Order 1 -----");
let order1 = new Shopping(501, "Ravi", "Laptop", 55000, 1, "UPI");
order1.displayOrderDetails();

console.log("----- Order 2 -----");
let order2 = new Shopping(502, "Priya", "Mobile", 25000, 2, "Card");
order2.displayOrderDetails();

console.log("----- Order 3 -----");
let order3 = new Shopping(503, "Kiran", "Headphones", 3000, 1, "Cash");
order3.displayOrderDetails();


