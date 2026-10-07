// let person = new Object();
// console.log("Before");
// console.log(person);

// person.name="hero";
// person["age"]=22;
// person.gender="male";
// person.ph.no=798955674;
// person.salary="40,000";

// person.city="guntur";
// console.log("After");

// // console.log(person);

// //update
// person.age=25;
// person["city"]="hyd";
// // console.log(person);

// //delete
// delete person.age;
// console.log(person);

// //normal way
// let fname="hero";
// let age ="23";
// let person = {
//     fname: fname,
//     age: age
// };
// console.log(person);

//shorter property syntax
// // let fname="hero";
// let age="22";
// let person = {
//     fname,
//     age,
// };
// console.log(person);

// function dispalyObject() {
//   let bike = {
//     model: "duke",
//     price: 3000000,
//     color: "orange",

//   };
//   console.log("-----------bike details---------");
//   console.log("model of the  bike=", bike.model);
//   console.log("price of the  bike=", bike.price);
//   console.log("color of the  bike=", bike.color);
// }
// dispalyObject()

// function dispalyObject() {
//   return {
//     model: "duke",
//     price: 3000000,
//     color: "orange",

//   };
// }
// let mybike = dispalyObject();
// console.log(mybike.model);

// let person ={
//     name:"janaki",
//     age:22,
//     gender:FileSystemHandle,
//     brave: function (){
//         console.log("Im brave");

//     },
// };
// person.brave()
// let person = {
//     name: "janaki",
//     brave: function (){
//         console.log("i am brave");

//     },
// };
// person["brave"]()




// let person = {
//   name: "hero",
//   age: 22,
//   dispalyDetails: () => {
//     console.log("my name", this.name);
//     console.log("my age ", person.age);
//   },

//   dispalyDet: function () {
//     console.log("my name", this.name);
//     console.log("my age ", person.age);
//   },
// };
// person.dispalyDet();
// person.dispalyDetails();




function abc() {
  console.log(this);
}
abc()
