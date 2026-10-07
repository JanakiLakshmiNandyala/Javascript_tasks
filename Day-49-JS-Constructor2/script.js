// ==========================================
// EXAMPLE 1: BOOK CLASS
// ==========================================

class Book {
  // Static properties
  static storeName = "BookLand";
  static location = "Hyderabad";

  // Constructor method
  constructor(id, title, author, price, genre, pages) {
    this.bookId = id;
    this.bookTitle = title;
    this.author = author;
    this.price = price;
    this.genre = genre;
    this.pages = pages;
  }

  // Display method
  displayDetails() {
    console.log("Store Name  :", Book.storeName);
    console.log("Location    :", Book.location);
    console.log("Book ID     :", this.bookId);
    console.log("Title       :", this.bookTitle);
    console.log("Author      :", this.author);
    console.log("Price       :", this.price);
    console.log("Genre       :", this.genre);
    console.log("Pages       :", this.pages);
  }
}

// Instances
let book1 = new Book(401, "JavaScript Guide", "John Smith", 450, "Programming", 320);
console.log("----- Book 1 -----");
book1.displayDetails();

let book2 = new Book(402, "Data Structures", "Alice Walker", 600, "Education", 450);
console.log("\n----- Book 2 -----");
book2.displayDetails();



// ==========================================
// EXAMPLE 2: CAR CLASS
// ==========================================

class Car {
  // Static properties
  static dealership = "AutoHub";
  static country = "India";

  // Constructor method
  constructor(id, brand, model, price, fuelType, year) {
    this.carId = id;
    this.brand = brand;
    this.model = model;
    this.price = price;
    this.fuelType = fuelType;
    this.year = year;
  }

  // Display method
  displayDetails() {
    console.log("Dealership  :", Car.dealership);
    console.log("Country     :", Car.country);
    console.log("Car ID      :", this.carId);
    console.log("Brand       :", this.brand);
    console.log("Model       :", this.model);
    console.log("Price       :", this.price);
    console.log("Fuel Type   :", this.fuelType);
    console.log("Year        :", this.year);
  }
}

// Instances
let car1 = new Car(501, "Toyota", "Fortuner", 3500000, "Diesel", 2024);
console.log("----- Car 1 -----");
car1.displayDetails();

let car2 = new Car(502, "Tata", "Nexon EV", 1500000, "Electric", 2023);
console.log("\n----- Car 2 -----");
car2.displayDetails();