// // const { use } = require("react");

// // const person = {
    
// //     firstName : "Ahmad",
// //     LastName : "Ansari",
// //     Age : 21,
// //     EyeColor : "Brown",
// //     fullName : function() {
// //         return this.firstName+ " " + this.LastName;
// //     }
// // };
// //     person.FName = function(){
// //         return (this.firstName + " " + this.LastName).toUpperCase();
// //     };

// // const x = person;
// // x.Age = 22;  
// // let y = "firstName"

// // // console.log(person[y]);
// // // console.log(person.FName());
// // // console.log(person.fullName());
// // // person.Nationality = "English";
// // // Delete object in JS
// // // delete person.Age;
// // delete person["Age"];
// // // console.log(person);

// // //Property Default Value
// // function Student(first, last, age, eye){
// //     this.firstName = first;
// //     this.LastName  = last;
// //     this.age = age;
// //     this.eyeColor = eye;
// //     this.Nationality = "British";
// // }
// // const myFather = new Student("Arshad","Ansari",53,"black");
// // const myMother = new Student("Parveen","Ansari",48,"black","Pakistan");
// // // console.log(myFather.age);
// // // console.log(myMother);

// // const myObj = {
// //     Name : "Rayyan",
// //     age : 19,
// //     myCars : {
// //         car1 : "BMW",
// //         car2 : "Ford",
// //         car3 : "Buggati"
// //     }
// // }
// // // Access Nested Object
// // // console.log(myObj.myCars["car3"]);

// // // console.log(myObj["myCars"]["car1"]);
// // let p1 = "myCars";
// // let p2 = "car2"
// // // console.log(myObj[p1][p2]);

// // let a = {
// //     Name : "Ahmad",
// //     language : "javaScript",
// //     run : () => {
// //         alert("self run");
// //     }
// // }
// // // console.log(a);

// // let p = {
// //     run : () => {
// //         alert("run");
// //     }
// // }
// // p.__proto__ = {
// //     nname : "fatima"
// // };
// // a.__proto__ = p; 
// // // a.run();
// // // console.log(a.nname);

// // const parent = {
// //     value : 2,
// //     method (){
// //         return this.value + 1; 
// //     }
// // };
// // // console.log(parent.method());

// // const child = {
// //     __proto__ : parent,
// // };
// // // console.log(child.method())

// // child.value = 4;
// // // console.log(child.method());

// // const Employee = {
// //     calctax() {
// //         console.log("Tax is 10%");
// //     },
// // //     calctax1 : function(){
// // //           console.log("Tax is 10%");
// // //     }
// // };

// // const KaranArjun = {
// //     salary : 50000,
// //     calctax() {
// //         console.log("Tax is 20%");
// //     },
// // }
// // const KaranArjun1 = {
// //     salary : 50000,
// // }
// // const KaranArjun2 = {
// //     salary : 50000,
// // }
// // const KaranArjun3 = {
// //     salary : 50000,
// // }
// // KaranArjun.__proto__ = Employee;
// // KaranArjun1.__proto__ = Employee;
// // KaranArjun2.__proto__ = Employee;
// // KaranArjun3.__proto__ = Employee;
// // // console.log(KaranArjun3.calctax());

// // class ToyotaCar {
// //     constructor(brand,mileage){
// //         console.log("Creating new Object");
// //         this.brand = brand;
// //         this.mileage = mileage;
// //     }
// //     start(){
// //         console.log("Start");
// //     }
// //     stop(){
// //         console.log("Stop");
// //     }
// // }
// // let Fortuner = new ToyotaCar("fortuner",9);
// // // console.log(Fortuner);
// // let Lexus = new ToyotaCar("Lexus",7);
// // // console.log(Lexus);

// // class parents{
// //     hello(){
// //         console.log("Hello")
// //     }
// // }
// // class childd extends parents{

// // }
// // let obj = new childd();

// // class personn{
// //     constructor(Name){
// //         this.species = "homo spiens"
// //         this.Name = Name;
// //     }
// //     eat(){
// //         console.log("eat");
// //     }
// //     sleep(){
// //         console.log("Sleep");
// //     }
// // }

// // class Enginer extends personn{
// //     constructor(Name){
// //         super(); // invoke parents class constructor
// //     }
// //     work(){
// //         super.eat();
// //         console.log("treat patients");
// //     }
// // }

// // let Ahmad = new Enginer("Ahmad");
// // Ahmad.sleep();
// // Ahmad.work();

// // // Practice Questions
// let dataa = "Secret Information";
// class User{
//     constructor(name, email){
//         this.name = name;
//         this.email = email;
//     }
//     viewData(){
//         console.log("Data = ",dataa);
//     }
// }
// class admin extends User{
//     constructor(name,email){
//         super(name,email);
//     }
//     editData() {
//         dataa = "Some new value";
//     }
// }

// let Student1 = new User("Ahmad","abc@gmail.com");
// let Student2 = new User("Rayyan","pqr@gmail.com");

// let admin1 = new admin("Umer","pp@gmail.com");

let value = true;
console.log(typeof value);
value = String(value);
console.log(typeof value);


