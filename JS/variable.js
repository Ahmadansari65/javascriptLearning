let name = "Ahmad";
console.log(name);
let age = 24;
var total_Price = 1000;
age = 26;
let NA;
console.log(NA);
var Discount = null;
console.log(typeof Discount);

const Student = {
    FullName : "Ahmad",
    age : 21,
    CGPA : 3.52,
    isPass : true
};
Student["FullName"] = "Ayesha";
console.log(Student)
console.log(Student["age"])
console.log(typeof Student)

const profile = {
    username : "Ahmad",
    isFollow : false,
    followers : 1234,
    followinf : 12344
};
console.log(profile)

greet();
function greet(){
    console.log("Hello JS");
}
console.log(a);
var a = 10;

let Name = "Ahmad";
var Fname = "Rayyan";
function info(){
    let Name = "Ansari";
    var Fname = "Haseeb";
    console.log(Name);
    console.log(Fname);
}
info();
console.log(Name);
console.log(Fname);

// checking the use var,let and const

var Number = 123;
let num = 8888;

function greet(){
    var Number = 222;
    const num = 999;
    console.log(Number);
    console.log(num);
}
greet();

function Hello(){
    let Number = 5555;
    console.log(Number);
    console.log(num);
}
Hello();

function user(){
    const Number = 888;
    console.log(Number);
    console.log(num);
}
user();
console.log(Number);
console.log(num);

// Checking the use of hoisting
hoisting();
console.log(x);
var x = 30;

console.log(x);
hoisting();

function hoisting(){
    let x = 20;
    console.log(x);
}

let variable = null;
console.log(variable); 

let s = Symbol("Ahmad");
console.log(s);
console.log(s);

console.log(Boolean(0));        // ?
console.log(Boolean(""));       // ?
console.log(Boolean("hello"));  // ?
console.log(Boolean(null));     // ?
console.log(Boolean(undefined));// ?

let a;
let b = null;

console.log(a == b);  // ?
console.log(a === b); // ?

let id1 = Symbol("id");
let id2 = Symbol("id");

console.log(id1 === id2); // ?



