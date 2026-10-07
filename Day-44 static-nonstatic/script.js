//program 1.

class Bike {
    // Static variables
    static brand = "Yamaha";
    static fuelType = "Petrol";
    // Method to create instance variables and assign values
    setData(model, ownerName, color, engineCC, price) {
        this.model = model;
        this.ownerName = ownerName;
        this.color = color;
        this.engineCC = engineCC;
        this.price = price;
    }
    // Display bike details
    displayDetails() {
        console.log("Brand       :", Bike.brand);
        console.log("Fuel Type   :", Bike.fuelType);
        console.log("Model       :", this.model);
        console.log("Owner Name  :", this.ownerName);
        console.log("Color       :", this.color);
        console.log("Engine CC   :", this.engineCC);
        console.log("Price       :", this.price);
    }
}

let b1 = new Bike();
let b2 = new Bike();
let b3 = new Bike();
let b4 = new Bike();
console.log("------ Bike 1 ------");
b1.setData("R15 V4", "Rahul", "Blue", 155, 185000);
b1.displayDetails();
console.log("------ Bike 2 ------");
b2.setData("MT-15", "Kiran", "Black", 155, 170000);
b2.displayDetails();
console.log("------ Bike 3 ------");
b3.setData("FZ-S", "Arjun", "Red", 149, 145000);
b3.displayDetails();
console.log("------ Bike 4 ------");
b4.setData("R15S", "Vamsi", "Grey", 155, 180000);
b4.displayDetails();


//program 2.

class FoodOrder {
    // Static variables
    static restaurantName = "Paradise Biryani";
    static deliveryCharge = 40;
    // Instance variables
    setData(orderNo, customerName, foodItem, quantity, amount) {
        this.orderNumber = orderNo;
        this.customerName = customerName;
        this.foodItem = foodItem;
        this.quantity = quantity;
        this.amount = amount;
    }
    displayDetails() {
        console.log("Restaurant :", FoodOrder.restaurantName);
        console.log("Delivery Charge :", FoodOrder.deliveryCharge);
        console.log("Order Number :", this.orderNumber);
        console.log("Customer Name :", this.customerName);
        console.log("Food Item :", this.foodItem);
        console.log("Quantity :", this.quantity);
        console.log("Food Amount :", this.amount);
    }
}

let f1 = new FoodOrder();
let f2 = new FoodOrder();
let f3 = new FoodOrder();
let f4 = new FoodOrder();
console.log("------ Order 1 ------");
f1.setData(1001, "Ajay", "Chicken Biryani", 2, 500);
f1.displayDetails();
console.log("------ Order 2 ------");
f2.setData(1002, "Ramesh", "Mutton Biryani", 1, 350);
f2.displayDetails();
console.log("------ Order 3 ------");
f3.setData(1003, "Teja", "Chicken 65", 3, 450);
f3.displayDetails();
console.log("------ Order 4 ------");
f4.setData(1004, "Nikhil", "Veg Biryani", 2, 300);
f4.displayDetails();




//program 3.

class phone{
    //static variables
    static brandName="Iphone";
    static operatingSystem = "IOS";
    //instance variable
    setData(pModel,pUserName,pStorage,pcolor,pPrice){
        this.model=pModel;
        this.userName=pUserName;
        this.storage=pStorage;
        this.color=pcolor;
        this.price=pPrice;
    }
    displayDetails(){
        console.log("Brand :",phone.brandName);
        console.log("Operating System:", phone.operatingSystem);
        console.log("Model :", this.model);
        console.log("Owner Name :", this.userName);
        console.log("RAM :", this.storage);
        console.log("Storage :", this.color);
        console.log("Price :", this.price);
    }
}
let p1 = new phone();
console.log("----------------user 1 --------------------")
p1.setData("iPhone 16 Pro Max", "Rahul", "256GB", "Black", 139999);
p1.displayDetails();

let p2 = new phone();
console.log("----------------user 2 --------------------")
p2.setData("iPhone 15", "Vamsi", "256GB", "blue", 69999);
p2.displayDetails();

let p3 = new phone();
console.log("----------------user 3 --------------------")
p3.setData("iPhone 16 Pro", "Kiran", "512GB", "Natural Titanium", 109999);
p3.displayDetails();