// class Test{
//     constructor(myName){
//         console.log("My name is ",myName)
//     }
// }
// let t = new Test("Constructor")




// class Test{
//     constructor(myName){
//         return {name : "iam constructor"}
//     }
// }
// let t = new Test("Constructor")
// console.log(t)




// class student{
//  create and assign values to instance variables
//      constructor(name,age){
//         this.myName = name
//         this.myAge=age
//     }
//     //display account details
//     displayDetails(){
//         console.log("name:",this.myName)
//         console.log("age:",this.myAge)
      
//     }
// }

// let s = new student("hero",22);
// s.displayDetails()




// class Employee{
//     constructor(name,designation,salary){
//         this.emName=name;
//         this.empDesignation = designation;
//         this.empSalary = salary;
//     }
//     displayDetails(){
//         console.log("Employee Name :",this.emName);
//         console.log("Employee Designation :",this.empDesignation);
//         console.log("Employee Salary :",this.empSalary);
//     }
// }
// console.log("=============emp1==========")
// let emp1 = new Employee("Hero1","Python developer",50000);
// emp1.displayDetails()

// console.log("=============emp2==========")
// let emp2 = new Employee("Hero2","Data Analyst",30000);
// emp2.displayDetails()




class phone{
    //static variables
    static brandName="Iphone";
    static operatingSystem = "IOS";
    //instance variable
    constructor(pModel,pStorage,pcolor,pPrice){
        this.model=pModel;
        this.storage=pStorage;
        this.color=pcolor;
        this.price=pPrice;
    }
    displayDetails(){
        console.log("Brand :",phone.brandName);
        console.log("Operating System:", phone.operatingSystem);
        console.log("Model :", this.model);
        console.log("storage :", this.storage);
        console.log("color :", this.color);
        console.log("Price :", this.price);
    }
}
let p1 = new phone("iPhone 16 Pro Max", "256GB", "Black", 139999);
console.log("----------------user 1 --------------------")
p1.displayDetails();

let p2 = new phone("iPhone 15","1TB", "blue", 69999);
console.log("----------------user 2 --------------------")
p2.displayDetails();

let p3 = new phone("iPhone 16 Pro","512GB", "Natural Titanium", 109999);
console.log("----------------user 3 --------------------")
p3.displayDetails();